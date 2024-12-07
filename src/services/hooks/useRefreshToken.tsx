import setAuthenticatedData from "@/src/pages/modules/setAuthenticationData";
import axios from "../api/axios";

const refreshUrl = "refresh_token";

const useRefreshToken = () => {
  const refresh = async () => {
    const response = await axios.post(refreshUrl);
    setAuthenticatedData(response.data.access_token)
    return response.data.access_token;
  };
  return refresh;
};

export default useRefreshToken;
