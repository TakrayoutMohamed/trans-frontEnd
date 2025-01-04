import { store } from "@/src/states/store";
import { AxiosInstance } from "axios";
import {
  setAllUsersData,
  setFriendsData,
} from "./setAuthenticationData";
import axios from "@/src/services/api/axios";
import refreshToken from "@/src/services/hooks/refreshToken";
import { AllUsersDataType } from "@/src/states/authentication/allUsersSlice";
import { UserDataType } from "@/src/states/authentication/userSlice";
import { w3cwebsocket } from "websocket";
import { closeSocket } from "./closeSocket";

export const sendFriendRequest = (
  axiosPrivateHook: AxiosInstance,
  username: string
) => {
  axiosPrivateHook
    .post("friend_req/", { username: username })
    .then((res) => {
      console.log("friend request sent to " + username);
      console.log(res);
      setAllUsersData(
        store.getState().allUsers.value.map((user) => {
          return user.username === username
            ? { ...user, is_friend: false, friend_req: "sent" }
            : user;
        })
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

export const removeFriend = (
  axiosPrivateHook: AxiosInstance,
  username: string
) => {
  axiosPrivateHook
    .delete("friends", { data: { username: username } })
    .then((res) => {
      console.log("remove Friend " + username + " ");
      console.log(res);
      setFriendsData(
        store
          .getState()
          .friends.value.filter((friend) => friend.username !== username)
      );
      setAllUsersData(
        store.getState().allUsers.value.map((user) => {
          return user.username === username
            ? { ...user, is_friend: false, friend_req: undefined }
            : user;
        })
      );
    })
    .catch((err) => {
      console.log(username);
      console.log(err);
    });
};
export type FriendRequestsType = UserDataType & { type: string };

interface FetchedData {
  created_at: string;
  from_user: FriendRequestsType;
  to_user: FriendRequestsType;
}

export async function getReceivedFriendRequests(
  axiosPrivateHook: AxiosInstance
) {
  let receivedFriendRequests: FriendRequestsType[] | null = null;
  try {
    const res = await axiosPrivateHook.get("friend_req", {
      params: { type: "received" },
    });
    console.log("response in getReceivedFriendRequests received data");
    console.log(res);
    if (res.data.results.friend_requests && res.data.results.friend_requests.length) {
      receivedFriendRequests = res.data.results.friend_requests.map(
        (friendReq: FetchedData) => ({
          ...friendReq.from_user,
          type: "received",
        })
      );
    }
  } catch (err) {
    console.log("error in fetchReceivedFriendRequests received");
    console.log(err);
  } finally {
    if (!receivedFriendRequests) receivedFriendRequests = [];
  }
  return receivedFriendRequests;
}

export async function getSentFriendRequests(axiosPrivateHook: AxiosInstance) {
  let sentFriendRequests: FriendRequestsType[] | null = null;
  try {
    const res = await axiosPrivateHook.get("friend_req", {
      params: { type: "sent" },
    });
    console.log("response in fetchSentFriendRequests sent data");
    console.log(res);
    if (res.data.results.friend_requests && res.data.results.friend_requests.length) {
      sentFriendRequests = res.data.results.friend_requests.map(
        (friendReq: FetchedData) => ({
          ...friendReq.to_user,
          type: "sent",
        })
      );
      console.log(sentFriendRequests);
    }
  } catch (err) {
    console.log("error in fetchSentFriendRequests sent");
    console.log(err);
  } finally {
    if (!sentFriendRequests) sentFriendRequests = [];
  }
  return sentFriendRequests;
}

export const getAllFriendRequests = async (
  axiosPrivateHook: AxiosInstance
): Promise<FriendRequestsType[]> => {
  let sentFriendRequests: FriendRequestsType[] | null = null;
  let receivedFriendRequests: FriendRequestsType[] | null = null;
  await getReceivedFriendRequests(axiosPrivateHook).then((data) => {
    receivedFriendRequests = data;
  });
  await getSentFriendRequests(axiosPrivateHook).then((data) => {
    sentFriendRequests = data;
  });
  if (sentFriendRequests !== null && receivedFriendRequests !== null)
    return [...sentFriendRequests, ...receivedFriendRequests];
  else return [];
};

export const rejectFriendRequest = async (
  axiosPrivateHook: AxiosInstance,
  username: string,
  setFriendRequestsList?: React.Dispatch<React.SetStateAction<any[]>>
) => {
  axiosPrivateHook
    .delete("friend_req/", { data: { username: username } })
    .then((res) => {
      console.log(res);
      setFriendRequestsList &&
        setFriendRequestsList((prev) => {
          return prev.filter((friendReq) => friendReq.username !== username);
        });
      setAllUsersData(
        store.getState().allUsers.value.map((user) => {
          return user.username === username
            ? { ...user, friend_req: undefined }
            : user;
        })
      );
    })
    .catch((err) => console.log(err))
    .finally(() => {
      return;
    });
};

export const acceptFriendRequest = async (
  axiosPrivateHook: AxiosInstance,
  username: string,
  setFriendRequestsList?: React.Dispatch<React.SetStateAction<any[]>>,
  friendRequestsList?: any[]
) => {
  axiosPrivateHook
    .put("friend_req/", { username: username })
    .then((res) => {
      let temp_data;
      console.log(res);
      setFriendRequestsList &&
        setFriendRequestsList((prev) => {
          return prev.filter((friendReq) => friendReq.username !== username);
        });
      if (friendRequestsList) {
        temp_data = friendRequestsList.find(
          (friendReq) => friendReq.username === username
        );
        console.log(temp_data);
        temp_data &&
          setFriendsData([...store.getState().friends.value, temp_data]);
      }
      setAllUsersData(
        store.getState().allUsers.value.map((user) => {
          return user.username === username
            ? { ...user, is_friend: true, friend_req: undefined }
            : user;
        })
      );
      console.log(temp_data);
    })
    .catch((err) => console.log(err))
    .finally(() => {
      return;
    });
};

export const isValidAccessToken = async (
  clientSocket?: w3cwebsocket | null
) => {
  try {
    await axios.post("Verify_token", {
      token: store.getState().accessToken.value,
    });
  } catch (error) {
    if (clientSocket) closeSocket(clientSocket);
    const refresh = refreshToken();
    let tmpAccessTokenFrom = refresh();
    if (!tmpAccessTokenFrom) return false;
  }
  return true;
};

export const getAllUsersData = async (axiosPrivateHook: AxiosInstance) => {
  axiosPrivateHook
    .post("search_user")
    .then(async (response) => {
      let tmpAllUsers: AllUsersDataType[] | undefined = undefined;
      let tmpAllFriendReq: FriendRequestsType[] | undefined = undefined;

      tmpAllUsers = response.data.results.users;
      try {
        tmpAllFriendReq = await getAllFriendRequests(axiosPrivateHook);
        tmpAllUsers = tmpAllUsers?.map((user) => {
          let user_friend_req = tmpAllFriendReq?.find(
            (friend_request) => friend_request.username === user.username
          );
          user = {
            ...user,
            friend_req: user_friend_req?.type,
          };
          return user;
        });
        tmpAllUsers && setAllUsersData(tmpAllUsers);
      } catch (err) {
        console.log(err);
      }
    })
    .catch((err) => {
      console.log(err);
      setAllUsersData([]);
    });
};

export const blockUser = (
  axiosPrivateHook: AxiosInstance,
  username: string
) => {
  axiosPrivateHook
    .post("block_user", { username: username })
    .then((res) => {
      console.log(res);
      setAllUsersData(
        store.getState().allUsers.value.map((user) => {
          return user.username === username
            ? { ...user, is_blocked: true }
            : user;
        })
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

export const unblockUser = (
  axiosPrivateHook: AxiosInstance,
  username: string
) => {
  axiosPrivateHook
    .delete("block_user", { data: { username: username } })
    .then((res) => {
      console.log("removed block to user " + username + " ");
      console.log(res);
      setAllUsersData(
        store.getState().allUsers.value.map((user) => {
          return user.username === username
            ? { ...user, is_blocked: false }
            : user;
        })
      );
    })
    .catch((err) => {
      console.log("error in removing block to a user ");
      console.log(err);
    });
};
