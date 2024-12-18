import setAuthenticatedData, { setUnAuthenticatedData } from "@/src/pages/modules/setAuthenticationData";
import axios from "../api/axios";

const refreshUrl = "refresh_token";

const refreshToken = () => {
  const refresh = async () => {
    let accessToken: string | undefined;
    try {
      const response = await axios.post(refreshUrl);
      setAuthenticatedData(response.data.access_token);
      accessToken = response.data.access_token;
    } catch (err) {
      console.log("error in refreshToken ");
      console.log(err);
      accessToken = undefined;
      setUnAuthenticatedData();
    } finally {
      return accessToken;
    }
  };
  return refresh;
};

export default refreshToken;
