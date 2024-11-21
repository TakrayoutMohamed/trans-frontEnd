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
import useAxiosPrivate from "./services/hooks/useAxiosPrivate";

function App() {
  const accessToken = useSelector(
    (state: RootState) => state.accessToken.value
  );
  const axiosPrivateHook = useAxiosPrivate();
  const dispatch = store.dispatch;
  useLayoutEffect(() => {
    if (Cookies.get("accessToken") && !accessToken) {
      const checkAuthentication = async () => {
        // send to server to verify if its a realy acceptable token
        const res = await axiosPrivateHook.post("verify_token", {
          token: Cookies.get("accessToken"),
        });
        return res;
      };
      checkAuthentication()
        .then((res) => {
          // console.log("response from app : first one");
          // console.log(res);
          // if the returned token is valid than store it in the accessToken state
          if (res.statusText == "OK") {
            dispatch(setAccessToken(Cookies.get("accessToken")!));
            dispatch(setAuthenticated());
          } else throw Error("not valid access token alvares");
          return res.data;
        })
        .catch(
          // else remove that token
          (err) => {
            console.log("error from catch");
            console.log(err);
            dispatch(setUnauthenticated());
            Cookies.remove("accessToken");
          }
        );
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
