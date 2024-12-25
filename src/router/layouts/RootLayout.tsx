import { Outlet } from "react-router-dom";
import NotificationsComponent from "./components/notifications/NotificationsComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { ICloseEvent, IMessageEvent, w3cwebsocket } from "websocket";
import { store } from "@/src/states/store";
import { rootLayout } from "../styles";
import UseAxiosPrivate from "@/src/services/hooks/UseAxiosPrivate";
import { AxiosInstance } from "axios";
import { acceptFriendRequest, isValidAccessToken, rejectFriendRequest } from "@/src/pages/modules/fetchingData";

function openSocket(accessToken: string | undefined): w3cwebsocket {
  console.log("oppening socket");
  return new w3cwebsocket(
    `${process.env.BACKEND_API_SOCKETS}/ws/notification/?token=${accessToken}`
  );
}

type JsonValue = string | number | boolean | null | JsonValue[] | any;

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
          reject={() =>
            rejectFriendRequest(axiosPrivateHook, json_data.sender.username).then(() =>
              toast.dismiss(json_data.username)
            )
          }
          accept={() =>
            acceptFriendRequest(axiosPrivateHook, json_data.sender.username).then(() =>
              toast.dismiss(json_data.username)
            )
          }
        />,
        {
          autoClose: 8000,
          toastId: json_data.sender.username,
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
