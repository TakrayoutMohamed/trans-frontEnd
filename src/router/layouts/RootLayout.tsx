import { Outlet } from "react-router-dom";
import NotificationsComponent from "./components/notifications/NotificationsComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { ICloseEvent, IMessageEvent, w3cwebsocket } from "websocket";
import { store } from "@/src/states/store";
import axios from "@/src/services/api/axios";
import refreshToken from "@/src/services/hooks/refreshToken";
import { rootLayout } from "../styles";
import UseAxiosPrivate from "@/src/services/hooks/UseAxiosPrivate";
import { AxiosInstance } from "axios";
import { setFriendsData } from "@/src/pages/modules/setAuthenticationData";

function openSocket(accessToken: string | undefined): w3cwebsocket {
  console.log("oppening socket");
  return new w3cwebsocket(
    `${process.env.BACKEND_API_SOCKETS}/ws/notification/?token=${accessToken}`
  );
}

type JsonValue = string | number | boolean | null | JsonValue[] | any;

const isValidAccessToken = () => {
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

const rejectFriendRequest = (
  axiosPrivateHook: AxiosInstance,
  username: string
) => {
  axiosPrivateHook
    .delete("friend_req", { data: { username: username } })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => {
      console.log("close toast");
      toast.dismiss(username);
    });
};

const acceptFriendRequest = (
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
      console.log("close toast");
      toast.dismiss(username);
    });
};

const watchSocket = (client: w3cwebsocket, axiosPrivateHook: AxiosInstance) => {
  client.onmessage = (dataEvent: IMessageEvent): JsonValue => {
    let json_data: JsonValue = null;
    json_data = JSON.parse(dataEvent.data as string);
    console.log(json_data);
    if (json_data?.type === "friend_request") {
      console.log("here ok");
      toast(
        <NotificationsComponent
          message={json_data.message}
          reject={() => rejectFriendRequest(axiosPrivateHook, json_data.sender)}
          accept={() => acceptFriendRequest(axiosPrivateHook, json_data.sender)}
        />,
        {
          autoClose: 8000,
          toastId: json_data.sender,
        }
      );
    }
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
  const axiosPrivateHook = UseAxiosPrivate();
  useEffect(() => {
    const handleSockets = async () => {
      console.log("json_data");
      if (isValidAccessToken()) {
        console.log("json_data2");
        if (!client || client.readyState === w3cwebsocket.CLOSED)
          client = openSocket(store.getState().accessToken.value + "");
        watchSocket(client, axiosPrivateHook);
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
  }, []);
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
