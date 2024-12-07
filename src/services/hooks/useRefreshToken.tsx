import axios from "../api/axios";

const refreshUrl = "refresh_token";

const useRefreshToken = () => {
  const refresh = async () => {
    const response = await axios.post(refreshUrl);
    return response.data.access_token;
  };
  return refresh;
};

export default useRefreshToken;
