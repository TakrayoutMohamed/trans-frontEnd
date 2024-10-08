import { RootState } from "@states/store";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const isAuthenticated = useSelector((state: RootState) => state.authenticator.value);
  return (isAuthenticated ? <Outlet/> : <Navigate to="sign-in" />);
};
export default PrivateRoutes;
