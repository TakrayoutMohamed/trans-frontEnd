import axios from "@/src/services/api/axios";
// import UseAxiosPrivate from '@/src/services/hooks/UseAxiosPrivate';
import { useEffect } from "react";
import setAuthenticatedData from "../../modules/setAuthenticationData";

const handleOAuthCallback = async () => {
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");

  if (code) {
    try {
      const res = await axios.get("socialauth", { params: { code } });
      console.log("OAuth Response:");
      console.log(res);
      setAuthenticatedData(res.data.access)

      // Handle the tokens (e.g., save them to localStorage)
      // localStorage.setItem('access_token', res.access_token);
      // localStorage.setItem('refresh_token', res.refresh_token);
    } catch (error) {
      console.error("OAuth Error:", error);
    }
  } else {
    console.error("No code parameter in URL");
  }
};

const OAuth = () => {
  useEffect(() => {
    handleOAuthCallback();
  }, []);

  return <div>Handling Gmail OAuth...</div>;
};

export default OAuth;
// https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-84fdb475704e23d6d0208d0eb1219bdc3b8b724d1159042bff2a0f825ca8f30f&redirect_uri=http://localhost:8000/api/socialauth/&response_type=code
