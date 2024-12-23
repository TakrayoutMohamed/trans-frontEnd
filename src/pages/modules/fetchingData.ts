import { store } from "@/src/states/store";
import { AxiosInstance } from "axios";
import { setFriendsData } from "./setAuthenticationData";
import axios from "@/src/services/api/axios";
import refreshToken from "@/src/services/hooks/refreshToken";

export const rejectFriendRequest = async (
  axiosPrivateHook: AxiosInstance,
  username: string
) => {
  axiosPrivateHook
    .delete("friend_req", { data: { username: username } })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => {
      return;
    });
};

export const acceptFriendRequest = async (
  axiosPrivateHook: AxiosInstance,
  username: string
) => {
  axiosPrivateHook
    .put("friend_req", { username: username })
    .then((res) => {
      console.log(res);
      axiosPrivateHook
        .post("search_username", { username: username })
        .then((res) => {
          setFriendsData([...store.getState().friends.value, res.data.user]);
        })
        .catch((err) => {
          console.log(err);
          setFriendsData([
            ...store.getState().friends.value,
            { username: username },
          ]);
        });
    })
    .catch((err) => console.log(err))
    .finally(() => {
      return;
    });
};

export const isValidAccessToken = () => {
    axios
      .post("Verify_token", {
        token: store.getState().accessToken.value,
      })
      .then(() => true)
      .catch(() => {
        const refresh = refreshToken();
        let tmpAccessTokenFrom = refresh();
        if (!tmpAccessTokenFrom) return false;
      });
    return true;
  };
