import MainRoutingComponent from "@router/MainRoutingComponent.tsx";
import { store } from "./states/store";
import { useLayoutEffect } from "react";
import UseAxiosPrivate from "./services/hooks/UseAxiosPrivate";
import setAuthenticatedData, {
  setBlockedData,
  setFriendsData,
  setUserData,
} from "./pages/modules/setAuthenticationData";
import { AxiosInstance } from "axios";
import Cookies from "js-cookie";
import { setAccessToken } from "./states/authentication/accessTokenSlice";

const getUsersInfo = async (axiosPrivateHook: AxiosInstance) => {
  await axiosPrivateHook
    .get("user_info")
    .then((res) => {
      setUserData(res.data);
    })
    .catch((err) => {
      console.log("error in getUsersInfo");
      console.log(err);
    });
};
const getFriendsData = async (axiosPrivateHook: AxiosInstance) => {
  axiosPrivateHook
    .get("friends")
    .then((res) => {
      setFriendsData(res.data.friends);
    })
    .catch((err) => {
      console.log("error in getFriendsInfo");
      console.log(err);
    });
};
const getBlockedData = async (axiosPrivateHook: AxiosInstance) => {
  axiosPrivateHook
    .get("block_user")
    .then((res) => {
      setBlockedData(res.data.blocked);
    })
    .catch((err) => {
      console.log("error in getBlockedInfo");
      console.log(err);
    });
};
function App() {
  const axiosPrivateHook = UseAxiosPrivate();
  useLayoutEffect(() => {
    if (!store.getState().authenticator.value) {
      if (Cookies.get("accessToken")?.length) {
        setAccessToken(Cookies.get("accessToken"));
      }
    }
    if (store.getState().accessToken.value) {
      getUsersInfo(axiosPrivateHook);
      getFriendsData(axiosPrivateHook);
      getBlockedData(axiosPrivateHook);
    }
  }, [store.getState().authenticator.value]);
  return (
    <>
      <MainRoutingComponent></MainRoutingComponent>
      {/* <div>App</div> */}
    </>
  );
}

export default App;
