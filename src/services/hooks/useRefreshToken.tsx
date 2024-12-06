import { store } from "@/src/states/store";
import axios from "../api/axios";
import { setAccessToken } from "@/src/states/authentication/accessTokenSlice";

const refreshUrl = "refresh_token";

const useRefreshToken = () => {
  const dispatch = store.dispatch;
  const refresh = async () => {
    const response = await axios.post(refreshUrl);
    console.log(`the access token is ${response.data.access_token}`);
    console.log(response);
    dispatch(setAccessToken(response?.data?.access_token));
    return response.data.access_token;
  };
  return refresh;
};

export default useRefreshToken;
