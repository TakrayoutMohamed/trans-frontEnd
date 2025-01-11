import { store } from "@/src/states/store";
import {
  setAllUsersData,
  setFriendRequestsData,
  setFriendsData,
  setNotificationsData,
} from "./setAuthenticationData";
import { axiosPrivate } from "@/src/services/api/axios";
// import refreshToken from "@/src/services/hooks/refreshToken";
// import { w3cwebsocket } from "websocket";
// import { closeSocket } from "./closeSocket";
import { UserDataType } from "@/src/customDataTypes/UserDataType";
import { AllUsersDataType } from "@/src/states/authentication/allUsersSlice";
import { FriendRequestsType } from "@/src/customDataTypes/FriendRequestsType";
import { NotificationsDataType } from "@/src/customDataTypes/NotificationsDataType";

export const sendFriendRequest = (username: string) => {
  axiosPrivate
    .post("friend_req/", { username: username })
    .then((res) => {
      console.log("friend request sent to " + username);
      console.log(res);
      setAllUsersData(
        store.getState().allUsers.value.map((user: AllUsersDataType) => {
          return user.username === username
            ? { ...user, is_friend: false, is_friend_req: "sent" }
            : user;
        })
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

export const removeFriend = (username: string) => {
  axiosPrivate
    .delete("friends", { data: { username: username } })
    .then((res) => {
      console.log("remove Friend " + username + " ");
      console.log(res);
      setFriendsData(
        store
          .getState()
          .friends.value.filter(
            (friend: UserDataType) => friend.username !== username
          )
      );
      setAllUsersData(
        store.getState().allUsers.value.map((user: AllUsersDataType) => {
          return user.username === username
            ? { ...user, is_friend: false, is_friend_req: false }
            : user;
        })
      );
    })
    .catch((err) => {
      console.log(username);
      console.log(err);
    });
};

export const rejectFriendRequest = async (username: string) => {
  axiosPrivate
    .delete("friend_req/", { data: { username: username } })
    .then((res) => {
      console.log(res);
      setFriendRequestsData([
        ...store
          .getState()
          .friendRequests.value.filter(
            (friend_req: FriendRequestsType) =>
              friend_req.user.username !== username
          ),
      ]);
      setAllUsersData(
        store.getState().allUsers.value.map((user: AllUsersDataType) => {
          return user.username === username
            ? { ...user, is_friend_req: false }
            : user;
        })
      );
      setNotificationsData(
        store
          .getState()
          .notifications.value.filter(
            (notif: NotificationsDataType) =>
              notif.sender_notif.username !== username
          )
      );
    })
    .catch((err) => console.log(err))
    .finally(() => {
      return;
    });
};

export const acceptFriendRequest = async (
  username: string,
  userToBeFriend?: UserDataType
) => {
  axiosPrivate
    .put("friend_req/", { username: username })
    .then((res) => {
      console.log(res);
      if (userToBeFriend && store.getState().friends.value) {
        setFriendsData([...store.getState().friends.value, userToBeFriend]);
      }
      if (store.getState().friendRequests.value)
        setFriendRequestsData([
          ...store
            .getState()
            .friendRequests.value.filter(
              (friend_req: FriendRequestsType) =>
                friend_req.user.username !== username
            ),
        ]);
      if (store.getState().friendRequests.value && !userToBeFriend) {
        let temp_data;
        temp_data = store
          .getState()
          .friendRequests.value.find(
            (friendReq) => friendReq.user.username === username
          );
        temp_data &&
          setFriendsData([...store.getState().friends.value, temp_data.user]);
      }
      setAllUsersData(
        store.getState().allUsers.value.map((user: AllUsersDataType) => {
          return user.username === username
            ? { ...user, is_friend: true, is_friend_req: false }
            : user;
        })
      );
      setNotificationsData(
        store
          .getState()
          .notifications.value.filter(
            (notif: NotificationsDataType) =>
              notif.sender_notif.username !== username
          )
      );
    })
    .catch((err) => console.log(err))
    .finally(() => {
      return;
    });
};

// export const isValidAccessToken = async (
//   clientSocket?: w3cwebsocket | null
// ) => {
//   try {
//     await axios.post("Verify_token", {
//       token: store.getState().accessToken.value,
//     });
//   } catch (error) {
//     if (clientSocket) closeSocket(clientSocket);
//     const refresh = refreshToken();
//     let tmpAccessTokenFrom = refresh();
//     if (!tmpAccessTokenFrom) return false;
//   }
//   return true;
// };

export const getAllUsersData = async () => {
  axiosPrivate
    .post("search_user")
    .then(async (response) => {
      setAllUsersData(response.data.results);
    })
    .catch((err) => {
      console.log(err);
      setAllUsersData([]);
    });
};

export const blockUser = (username: string) => {
  axiosPrivate
    .post("block_user", { username: username })
    .then((res) => {
      console.log(res);
      setAllUsersData(
        store.getState().allUsers.value.map((user: AllUsersDataType) => {
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

export const unblockUser = (username: string) => {
  axiosPrivate
    .delete("block_user", { data: { username: username } })
    .then((res) => {
      console.log("removed block to user " + username + " ");
      console.log(res);
      setAllUsersData(
        store.getState().allUsers.value.map((user: AllUsersDataType) => {
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
