import { useSelector } from "react-redux";
import { RootState } from "../states/store";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AuthorizationRoutes = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.authenticator.value
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) navigate("/game", { replace: true });
  });
  return <Outlet />;
};

export default AuthorizationRoutes;
