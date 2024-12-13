import refreshToken from "@/src/services/hooks/refreshToken";
import { RootState } from "@/src/states/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = refreshToken();
  const accessToken = useSelector(
    (state: RootState) => state.accessToken.value
  );
  const isAuthenticated = useSelector(
    (state: RootState) => state.authenticator.value
  );

  useEffect(() => {
    let isMounted = true;

    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (err) {
        console.error(err);
      } finally {
        isMounted && setIsLoading(false);
      }
    };
    // Avoids unwanted call to verifyRefreshToken
    !accessToken ? verifyRefreshToken() : setIsLoading(false);

    return () => {
      isMounted = false;
    };
  }, [isAuthenticated]);

  return <>{isLoading ? <p>Loading...</p> : <Outlet />}</>;
};
export default RootLayout;
