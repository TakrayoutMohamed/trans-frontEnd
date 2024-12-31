import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { rootLayout } from "../styles";
import useHandleSockets from "@/src/services/hooks/useHandleSockets";
import { w3cwebsocket } from "websocket";

let notificationSocket: w3cwebsocket | null = null;

const RootLayout = () => {
  useHandleSockets({urlOfSocket : "notification", client : notificationSocket});
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
