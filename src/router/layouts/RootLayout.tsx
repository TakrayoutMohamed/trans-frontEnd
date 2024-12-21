import { Outlet } from "react-router-dom";
import NotificationsComponent from "./components/notifications/NotificationsComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { IMessageEvent, w3cwebsocket } from "websocket";
import { useSelector } from "react-redux";
import { RootState, store } from "@/src/states/store";
import axios from "@/src/services/api/axios";
import refreshToken from "@/src/services/hooks/refreshToken";
import { rootLayout } from "../styles";

function openSocket(accessToken: string): w3cwebsocket {
  return new w3cwebsocket(
    `${process.env.BACKEND_API_SOCKETS}/ws/notification/?token=${accessToken}`
  );
}

type JsonValue = string | number | boolean | null | JsonValue[] | any;

const isValidAccessToken = async (): Promise<void> => {
  try {
    await axios.post("Verify_token", {
      token: store.getState().accessToken.value,
    });
    // return (true)
  } catch (error) {
    const refresh = refreshToken();
    await refresh();
    // return false;
  }
};

const RootLayout = () => {
  const accessToken = useSelector(
    (state: RootState) => state.accessToken.value
  );
  useEffect(() => {
    // const json_data: JsonValue = watchSocket(client);
    console.log("json_data");
    return () => {
      if (client.OPEN) {
        console.log(
          "cleaning funtion in APPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP"
        );
        client.close();
      }
    };
  });
  let client: w3cwebsocket;
  // if (!client.CLOSED && !client.CLOSING)

  isValidAccessToken();
  client = openSocket(accessToken + "");
  let json_data: JsonValue = null;
  if (client.OPEN) {
    client.onmessage = (dataEvent: IMessageEvent) => {
      console.log(dataEvent.data);
      json_data = JSON.parse(dataEvent.data as string);
      console.log(typeof dataEvent.data);
      console.log(json_data);
      if (json_data?.type === "friend_request") {
        console.log("here ok");
        toast(
          <NotificationsComponent
            message={json_data.message}
            reject={() => console.log("reject clicked")}
            accept={() => console.log("accept clicked")}
          />,
          {
            autoClose: 8000,
          }
        );
      }
    };
  }
  // const showToast = () => {
  //   toast(
  //     <NotificationsComponent
  //       message={"here is the message for the toast notification "}
  //       reject={() => console.log("reject clicked")}
  //       accept={() => console.log("accept clicked")}
  //     />,
  //     {
  //       autoClose: 8000,
  //     }
  //   );
  // };
  return (
    <>
      <div className={rootLayout}>
        {/* <NotificationsComponent
          message="Hey user! 🎉 You're invited to a fun tournament! Join us!"
          reject={() => console.log("reject clicked")}
          accept={() => console.log("accept clicked")}
        /> */}
        {/* <div
          className="btn btn-success"
          onClick={() => {
            showToast();
          }}
        >
          button
        </div> */}
        <ToastContainer
          draggable={true}
          closeOnClick={false}
          pauseOnFocusLoss={true}
          className="toast-container-style"
          toastClassName="toast-component-style"
          progressClassName="toast-progress-bar-style"
          pauseOnHover={true}
          autoClose={2000}
          limit={2}
        />
        {/* <ToastContainer enableMultiContainer containerId={"requests"} position={"bottom-right"}/> */}
        <Outlet />
      </div>
    </>
  );
};
export default RootLayout;
