import setAuthenticatedData from "@/src/pages/modules/setAuthenticationData";
import axios from "../api/axios";

const refreshUrl = "refresh_token";

const useRefreshToken = () => {
  const refresh = async () => {
    try{
      const response = await axios.post(refreshUrl);
      setAuthenticatedData(response.data.access_token)
      return response.data.access_token;
    }
    catch(err){
      console.log("error in useRefreshToken ")
      console.log(err);
    }
    return ""
  };
  return refresh;
};

export default useRefreshToken;
