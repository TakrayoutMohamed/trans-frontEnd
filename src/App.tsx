import MainRoutingComponent from "@router/MainRoutingComponent.tsx";
import { RootState, store } from "./states/store";
import {
  setAuthenticated,
  setUnauthenticated,
} from "./states/authentication/authenticatorSlice";
import { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import { setAccessToken } from "./states/authentication/accessTokenSlice";
import { axiosPrivate } from "./services/api/axios";
import useRefreshToken from "./services/hooks/useRefreshToken";

function App() {
  const accessToken = useSelector(
    (state: RootState) => state.accessToken.value
  );
  const refresh = useRefreshToken();
  const dispatch = store.dispatch;
  console.log("accessToken from app.tsx {" + accessToken + "}");
  useLayoutEffect(() => {
    console.log("accessToken from app.tsx {" + accessToken + "}");
    console.log("access token : " + Cookies.get("accessToken"));
    if (Cookies.get("accessToken") && !accessToken)
    {
      const checkAuthentication = async () => {
        // send to server to verify if its a realy acceptable token
        const res = await axiosPrivate
        .post(
          "/authenticate",
          JSON.stringify({ accessToken: Cookies.get("accessToken") })
        )
        return res;
      }
      checkAuthentication().
      then((res) => {
        // console.log("response from app : "+JSON.stringify(res))
        // if the returned token is valid than store it in the accessToken state
        if (res.data?.accessToken && res.data?.accessToken === Cookies.get("accessToken"))
          {
            dispatch(setAccessToken(Cookies.get("accessToken")!));
            dispatch(setAuthenticated());
          }
          else throw Error("not valid access token")
          return res.data;
      }).then((res) => {
        console.log("response from app : "+JSON.stringify(res))
        
      })
      .catch(
        // else remove that token
        (err) => {
          console.log(err)
          dispatch(setUnauthenticated());
          Cookies.remove("accessToken")
      });
    }
  }, []);
  return (
    <>
      <MainRoutingComponent></MainRoutingComponent>
      {/* <div>App</div> */}
    </>
  );
}

export default App;
