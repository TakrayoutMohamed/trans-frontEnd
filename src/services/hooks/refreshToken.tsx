import setAuthenticatedData from "@/src/pages/modules/setAuthenticationData";
import axios from "../api/axios";

const refreshUrl = "refresh_token";

const refreshToken = () => {
  const refresh = async () => {
    try{
      const response = await axios.post(refreshUrl);
      setAuthenticatedData(response.data.access_token)
      return response.data.access_token;
    }
    catch(err){
      console.log("error in refreshToken ")
      console.log(err);
    }
    return ""
  };
  return refresh;
};

export default refreshToken;
