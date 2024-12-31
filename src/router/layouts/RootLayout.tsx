import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { w3cwebsocket } from "websocket";
import { RootState } from "@/src/states/store";
import { rootLayout } from "../styles";
import UseAxiosPrivate from "@/src/services/hooks/UseAxiosPrivate";
import { AxiosInstance } from "axios";
import {
  isValidAccessToken,
} from "@/src/pages/modules/fetchingData";
import { useSelector } from "react-redux";
import { openSocket } from "@/src/pages/modules/openSocket";
import { closeSocket } from "@/src/pages/modules/closeSocket";
import { watchSocket } from "@/src/pages/modules/watchSocket";

let axiosPrivateHook: AxiosInstance;

let client: w3cwebsocket | null = null;


const RootLayout = () => {
  axiosPrivateHook = UseAxiosPrivate();
  const isAuthenticated = useSelector(
    (state: RootState) => state.authenticator.value
  );
  const accessToken = useSelector(
    (state: RootState) => state.accessToken.value
  );
  useEffect(() => {
    if (isAuthenticated) {
      const handleSockets = async () => {
        console.log("json_data");
        if (await isValidAccessToken(client)) {
          console.log("json_data2");
          if (!client || client.readyState === w3cwebsocket.CLOSED)
            client = openSocket("ws/notification", accessToken + "");
          if (client) {
            console.log("befor watching socket");
            watchSocket(axiosPrivateHook, client);
            if (client.readyState === w3cwebsocket.CLOSING) {
              console.log("socket closing");
            }
            if (client.readyState === w3cwebsocket.CLOSED) {
              console.log("socket closed");
            }
          }
        }
      };
      handleSockets();
      return () => {
        console.log("cleaning funtion in APPPPPPPPPPPPPPPPPPPPPP");
        closeSocket(client) && (client = null);
      };
    }
  }, [accessToken]);
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
          containerId={"requests"}
        />
        <ToastContainer
          pauseOnFocusLoss={false}
          pauseOnHover={false}
          draggable={true}
          containerId={"validation"}
          autoClose={2000}
          position={"top-center"}
        />
        <Outlet />
      </div>
    </>
  );
};
export default RootLayout;
