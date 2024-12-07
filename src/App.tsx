import MainRoutingComponent from "@router/MainRoutingComponent.tsx";
import { RootState } from "./states/store";
import { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import useAxiosPrivate from "./services/hooks/useAxiosPrivate";
import setAuthenticationData, {
  setUserData,
} from "./pages/modules/setAuthenticationData";
import Cookies from "js-cookie";

function App() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.authenticator.value
  );
  const accessToken = useSelector(
    (state: RootState) => state.accessToken.value
  );
  const axiosPrivateHook = useAxiosPrivate();
  useLayoutEffect(() => {
    if (Cookies.get("accessToken")?.length) {
      setAuthenticationData(Cookies.get("accessToken") + "");
    }
    const getUsersInfo = async () => {
      try {
        const userData = await axiosPrivateHook.get("user_info",{headers: {
          Authorization: `Bearer ${accessToken}`
        }});
        setUserData(userData.data);
      } catch (err) {
        console.log("error in getUsersInfo");
        console.log(err);
      }
    };
    if (isAuthenticated && accessToken) getUsersInfo();
  }, [isAuthenticated]);
  return (
    <>
      <MainRoutingComponent></MainRoutingComponent>
      {/* <div>App</div> */}
    </>
  );
}

export default App;
