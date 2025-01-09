import MainRoutingComponent from "@router/MainRoutingComponent.tsx";
import { RootState } from "./states/store";
import { useEffect } from "react";
import {
  setFriendsData,
  setUserData,
} from "./pages/modules/setAuthenticationData";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import refreshToken from "./services/hooks/refreshToken";
import { axiosPrivate } from "./services/api/axios";

const getUsersInfo = async () => {
  await axiosPrivate
    .get("user_info")
    .then((res) => {
      setUserData(res.data);
    })
    .catch((err) => {
      console.log("error in getUsersInfo");
      console.log(err);
    });
};

const getFriendsData = async () => {
  axiosPrivate
    .get("friends")
    .then((res) => {
      setFriendsData(res.data.results.friends);
    })
    .catch((err) => {
      console.log("error in getFriendsInfo");
      console.log(err);
    });
};

function App() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.authenticator.value
  );
  useEffect(() => {
    if (!isAuthenticated) {
      if (Cookies.get("accessToken") !== undefined) {
        const refresh = refreshToken();
        refresh();
      }
    } else {
      getUsersInfo();
      getFriendsData();
    }
  }, [isAuthenticated]);
  return (
    <>
      <MainRoutingComponent />
    </>
  );
}

export default App;
