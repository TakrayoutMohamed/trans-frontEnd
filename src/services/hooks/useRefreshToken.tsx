import { store } from "@/src/states/store";
import axios from "../api/axios";
import { setAccessToken } from "@/src/states/authentication/accessTokenSlice";

const refreshUrl = "/here is the refresh route";

const useRefreshToken = () => {
  const dispatch = store.dispatch;
	const refresh = async () => {
			const response = await axios.get(refreshUrl, {
			withCredentials : true
		})
		console.log(`the access token is ${response.data.accessToken}`);
		dispatch(setAccessToken(response?.data?.accessToken));
		return (response.data.accessToken);
	}
  return refresh;
};

export default useRefreshToken;
