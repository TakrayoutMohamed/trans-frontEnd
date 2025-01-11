import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { rootLayout } from "../styles";
import {useHandleSockets} from "@/src/services/hooks/useHandleSockets";
import { useLayoutEffect } from "react";
import { closeSocket } from "@/src/pages/modules/closeSocket";
import { useSelector } from "react-redux";
import { RootState } from "@/src/states/store";

const RootLayout = () => {
  const accessToken = useSelector((state: RootState) => state.accessToken.value)
  const {client: notificationSocket, setClient } = useHandleSockets({urlOfSocket : "notification", accessToken: accessToken});
  useLayoutEffect(() => {
    return () => {
      if (closeSocket(notificationSocket))
        setClient(null);
    };
  }, [accessToken])
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
