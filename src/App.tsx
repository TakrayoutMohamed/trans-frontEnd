import MainRoutingComponent from "@router/MainRoutingComponent.tsx";
import { RootState } from "./states/store";
import { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import useAxiosPrivate from "./services/hooks/useAxiosPrivate";
import setAuthenticationData, {
  setUnAuthenticatedData,
  setUserData,
} from "./pages/modules/setAuthenticationData";

function App() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.authenticator.value
  );
  const accessToken = useSelector(
    (state: RootState) => state.accessToken.value
  );
  const axiosPrivateHook = useAxiosPrivate();
  useLayoutEffect(() => {
    const checkAuthentication = async () => {
      const res = await axiosPrivateHook.post("refresh_token");
      return res;
    };
    const getUsersInfo = async () => {
      try {
        const userData = await axiosPrivateHook.get("user_info");
        setUserData(userData.data);
      } catch (err) {
        console.log("error in getUsersInfo");
        console.log(err);
      }
    };
    if (isAuthenticated && accessToken) getUsersInfo();
    checkAuthentication()
      .then((res) => {
        if (res.statusText == "OK") {
          setAuthenticationData(res.data.access_token);
        } else throw Error("not valid access token alvares");
        return res.data;
      })
      .catch((err) => {
        setUnAuthenticatedData();
        console.log("error from catch");
        console.log(err);
      });
  }, [isAuthenticated]);
  return (
    <>
      <MainRoutingComponent></MainRoutingComponent>
      {/* <div>App</div> */}
    </>
  );
}

export default App;
