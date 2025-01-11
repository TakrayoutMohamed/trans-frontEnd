import { store } from "@/src/states/store";
import {
  setAllUsersData,
  setFriendsData,
  setNotificationsData,
} from "./setAuthenticationData";
import { SocketJsonValueType } from "./watchSocket";
import { AllUsersDataType } from "@/src/states/authentication/allUsersSlice";
import { acceptFriendRequest, rejectFriendRequest } from "./fetchingData";
import { toast } from "react-toastify";
import NotificationsComponent from "@/src/router/layouts/components/notifications/NotificationsComponent";
import { NotificationsDataType } from "@/src/customDataTypes/NotificationsDataType";

function launchToast(
  data: SocketJsonValueType,
  accept?: () => void,
  reject?: () => void
) {
  toast(
    <NotificationsComponent
      message={data.message}
      reject={reject}
      accept={accept}
    />,
    {
      autoClose: 8000,
      toastId: data.sender.username + data.type,
      containerId: "requests",
    }
  );
}

export const trigerRightEvent = (json_data: SocketJsonValueType) => {
  console.log("the location of the user in the app");
  console.log(json_data);
  switch (json_data.type) {
    case "unfriend": {
      console.log("here is the block of unfriend ");
      console.log(json_data);
      setFriendsData(
        store
          .getState()
          .friends.value.filter(
            (user) => user.username !== json_data.sender.username
          )
      );
      setAllUsersData(
        store.getState().allUsers.value.map((user: AllUsersDataType) => {
          if (user.username === json_data.sender.username) {
            user = { ...user, is_friend: false, is_friend_req: false };
          }
          return user;
        })
      );
      break;
    }
    case "friend_request": {
      console.log("friend_request in trigerRightEvent ");
      setAllUsersData(
        store.getState().allUsers.value.map((user: AllUsersDataType) => {
          if (user.username === json_data.sender.username) {
            user = { ...user, is_friend: false, is_friend_req: "received" };
          }
          return user;
        })
      );
      setNotificationsData([
        ...store.getState().notifications.value,
        {
          message: `${json_data.sender.username} sent you a friend request`,
          sender_notif: json_data.sender,
          type: "friend_request",
        },
      ]);
      launchToast(
        json_data,
        async () => {
          try {
            await acceptFriendRequest(
              json_data.sender.username,
              json_data.sender
            );
          } catch (err) {
            console.log(err);
          } finally {
            toast.dismiss(json_data.sender.username + json_data.type);
          }
        },
        async () => {
          try {
            await rejectFriendRequest(json_data.sender.username);
          } catch (err) {
            console.log(err);
          } finally {
            toast.dismiss(json_data.sender.username + json_data.type);
          }
        }
      );
      break;
    }
    case "accept_request": {
      //accepted friend req
      console.log("here is the block of accept_request ");
      console.log(json_data);
      setFriendsData([...store.getState().friends.value, json_data.sender]);
      setAllUsersData(
        store.getState().allUsers.value.map((user: AllUsersDataType) => {
          if (user.username === json_data.sender.username) {
            user = { ...user, is_friend: true, is_friend_req: false };
          }
          return user;
        })
      );
      setNotificationsData(
        store
          .getState()
          .notifications.value.filter(
            (notification: NotificationsDataType) =>
              notification.sender_notif.username !== json_data.sender.username
          )
      );
      break;
    }
    case "reject_request": {
      //reject friend req
      console.log("here is the block of reject_request ");
      console.log(json_data);
      setAllUsersData(
        store.getState().allUsers.value.map((user: AllUsersDataType) => {
          if (user.username === json_data.sender.username) {
            user = { ...user, is_friend: false, is_friend_req: false };
          }
          return user;
        })
      );
      setNotificationsData(
        store
          .getState()
          .notifications.value.filter(
            (notification: NotificationsDataType) =>
              notification.sender_notif.username !== json_data.sender.username
          )
      );
      break;
    }
    case "block_request": {
      //block user
      console.log("here is the block of block_request ");
      console.log(json_data);
      break;
    }
    case "unblock_request": {
      //unblock user
      console.log("here is the block of unblock_request ");
      console.log(json_data);
      break;
    }
    case "game_invite": {
      // geme invitation
      console.log("here is the block of game_invite ");
      console.log(json_data);
      break;
    }
    case "accept_invite": {
      //accept geme invite
      console.log("here is the block of accept_invite ");
      console.log(json_data);
      break;
    }
    default: {
      console.log("default switch case");
      console.log(json_data);
      break;
    }
  }
};
