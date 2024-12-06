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
import axios from "./services/api/axios";


function App() {
  const accessToken = useSelector(
    (state: RootState) => state.accessToken.value
  );
  const axiosPrivateHook = useAxiosPrivate();
  const dispatch = store.dispatch;
  useLayoutEffect(() => {
    // if ( !Cookies.get("accessToken")) {
      const checkAuthentication = async () => {
        // send to server to verify if its a realy acceptable token
        const res = await axiosPrivateHook.post("refresh_token");
        return res;
      };
      checkAuthentication()
      .then((res) => {
        // console.log("response from app : first one");
        console.log(res);
        // if the returned token is valid than store it in the accessToken state
        if (res.statusText == "OK") {
          dispatch(setAccessToken(res.data.access_token));
          Cookies.set("accessToken", res.data.access_token);
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
      
      // }
      const getUsersInfo = async () => {
        try{
          const userData = await axiosPrivateHook.get("user_info");
          console.log("responsegetUsersInfo");
          console.log(userData)
        }
        catch(err){
          console.log("error in getUsersInfo");
          console.log(err)
        }
      }
      getUsersInfo();
  }, []);
  return (
    <>
      <MainRoutingComponent></MainRoutingComponent>
      {/* <div>App</div> */}
    </>
  );
}

export default App;
