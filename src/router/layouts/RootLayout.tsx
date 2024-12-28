import { Outlet } from "react-router-dom";
import NotificationsComponent from "./components/notifications/NotificationsComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { ICloseEvent, IMessageEvent, w3cwebsocket } from "websocket";
import { RootState, store } from "@/src/states/store";
import { rootLayout } from "../styles";
import UseAxiosPrivate from "@/src/services/hooks/UseAxiosPrivate";
import { AxiosInstance } from "axios";
import {
  acceptFriendRequest,
  isValidAccessToken,
  rejectFriendRequest,
} from "@/src/pages/modules/fetchingData";
import {
  setAllUsersData,
  setFriendsData,
} from "@/src/pages/modules/setAuthenticationData";
import { AllUsersDataType } from "@/src/states/authentication/allUsersSlice";
import { useSelector } from "react-redux";

function openSocket(accessToken: string | undefined): w3cwebsocket {
  console.log("oppening socket");
  return new w3cwebsocket(
    `${process.env.BACKEND_API_SOCKETS}/ws/notification/?token=${accessToken}`
  );
}

let axiosPrivateHook: AxiosInstance;

type JsonValue = string | number | boolean | null | JsonValue[] | any;

const launchToast = (
  data: JsonValue,
  accept?: () => void,
  reject?: () => void
) => {
  toast(
    <NotificationsComponent
      message={data.message}
      reject={reject}
      accept={accept}
    />,
    {
      autoClose: 8000,
      toastId: data.sender.username + data.type,
    }
  );
};

const trigerRightEvent = (json_data: JsonValue) => {
  console.log("the location of the user in the app");
  console.log(location.pathname);
  switch (json_data.type) {
    case "friend_request": {
      setAllUsersData(
        store.getState().allUsers.value.map((user: AllUsersDataType) => {
          if (user.username === json_data.sender.username) {
            user = { ...user, is_friend: false, friend_req: "received" };
          }
          return user;
        })
      );
      launchToast(
        json_data,
        async () => {
          try {
            await acceptFriendRequest(
              axiosPrivateHook,
              json_data.sender.username,
              undefined,
              [json_data.sender]
            );
          } catch (err) {
            console.log(err);
          } finally {
            toast.dismiss(json_data.sender.username + json_data.type);
          }
        },
        async () => {
          try {
            await rejectFriendRequest(
              axiosPrivateHook,
              json_data.sender.username
            );
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
            user = { ...user, is_friend: true, friend_req: undefined };
          }
          return user;
        })
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
            user = { ...user, is_friend: false, friend_req: undefined };
          }
          return user;
        })
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
  if (
    ["friend_request", "accept_request", "reject_request"].includes(
      json_data.type
    )
  ) {
    if (location.pathname === "profile/requests") {
    }
  }
};

const watchSocket = (client: w3cwebsocket) => {
  client.onmessage = (dataEvent: IMessageEvent): JsonValue => {
    let json_data: JsonValue = null;
    json_data = JSON.parse(dataEvent.data as string);
    console.log(json_data);
    trigerRightEvent(json_data);
  };
  client.onclose = (closeEvent: ICloseEvent) => {
    console.log("close event in socket ");
    console.log(closeEvent);
  };
  client.onerror = (errorEvent: Error) => {
    console.log("error in socket ");
    console.log(errorEvent);
  };
};
let client: w3cwebsocket | null = null;

const RootLayout = () => {
  axiosPrivateHook = UseAxiosPrivate();
  const isAuthenticated = useSelector(
    (state: RootState) => state.authenticator.value
  );
  useEffect(() => {
    if (isAuthenticated){
      const handleSockets = async () => {
        console.log("json_data");
        if (isValidAccessToken()) {
          console.log("json_data2");
          if (!client || client.readyState === w3cwebsocket.CLOSED)
            client = openSocket(store.getState().accessToken.value + "");
          watchSocket(client);
          if (client.readyState === w3cwebsocket.CLOSING) {
            console.log("socket closing");
          }
          if (client.readyState === w3cwebsocket.CLOSED) {
            console.log("socket closed");
          }
        }
      };
      handleSockets();
      return () => {
        console.log("cleaning funtion in APPPPPPPPPPPPPPPPPPPPPP");
        if (client && client?.readyState === w3cwebsocket.OPEN) {
          console.log("befor cleaning the funciton APPPPPPPPPPPPPPPPPPPPPP");
          client.close(3001, "cleaning in useEffect");
          client = null;
        }
      };
    }
  }, [isAuthenticated]);
  return (
    <>
      <div className={rootLayout}>
        <ToastContainer
          draggable={true}
          closeOnClick={false}
          pauseOnFocusLoss={false}
          className="toast-container-style"
          toastClassName="toast-component-style"
          progressClassName="toast-progress-bar-style"
          pauseOnHover={true}
          autoClose={2000}
          limit={5}
        />
        {/* <ToastContainer enableMultiContainer containerId={"requests"} position={"bottom-right"}/> */}
        <Outlet />
      </div>
    </>
  );
};
export default RootLayout;
