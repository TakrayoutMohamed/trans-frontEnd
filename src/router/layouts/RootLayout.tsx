import { Outlet } from "react-router-dom";
import NotificationsComponent from "./components/notifications/NotificationsComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { ICloseEvent, IMessageEvent, w3cwebsocket } from "websocket";
import { useSelector } from "react-redux";
import { RootState, store } from "@/src/states/store";
import axios from "@/src/services/api/axios";
import refreshToken from "@/src/services/hooks/refreshToken";

async function startNotificationSockets() {
  const AccessToken = store.getState().accessToken.value;
  const userData = store.getState().user.value;
  // const refresh = refreshToken();
  let client: w3cwebsocket;
  if (AccessToken) {
    client = new w3cwebsocket(
      `${process.env.BACKEND_API_SOCKETS}/ws/notification/?token=${AccessToken}`
    );
    client.onclose = (data: ICloseEvent) => {
      console.log("hello client disconnected");
      // data.
      client.send("client with user name : {" + userData + "} DISCONNECTED");
    };
    // }
    client.onopen = () => {
      console.log("hello client connected");
    };
    client.onmessage = (data: IMessageEvent) => {
      console.log("this message recieved in client side");
      console.log(data);
      console.log(data.data);
      // alert(data)
    };
    console.log(client);
  }
}

function openSocket(accessToken: string): w3cwebsocket {
  return new w3cwebsocket(
    `${process.env.BACKEND_API_SOCKETS}/ws/notification/?token=${accessToken}`
  );
}

type JsonValue = string | number | boolean | null | JsonValue[] | any;

function watchSocket(client: w3cwebsocket): JsonValue {
  let data: JsonValue = null;
  // if (client.OPEN) {
  client.onmessage = (dataEvent: IMessageEvent) => {
    console.log(dataEvent.data);
    data = JSON.parse(dataEvent.data as string);
    console.log(typeof dataEvent.data);
    console.log(data);
    // return data;
    // };
    // return data;
  };
  console.log("data's value befor return ");
  console.log(data);
  return data;
}

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
        // toast.success("heeeeloooooo from toast.success", {
        //   autoClose: 55555555555,
        // });
        // toast.success(json_data, {
        //   autoClose: 55555555555,
        // });
        toast(
          <NotificationsComponent
            message={json_data.message}
            reject={() => console.log("reject clicked")}
            accept={() => console.log("accept clicked")}
          />,
          { style: { minWidth: "fit-content" } }
        );
      }
    };
  }
  return (
    <>
      {/* <NotificationsComponent
        message="Hey user! 🎉 You're invited to a fun tournament! Join us!"
        reject={() => console.log("reject clicked")}
        accept={() => console.log("accept clicked")}
      /> */}
      <ToastContainer
        draggable={true}
        closeOnClick={true}
        pauseOnFocusLoss={true}
        autoClose={80000}
        className="pb-2"
        toastClassName="p-0  bg-info"
      />
      {/* <ToastContainer enableMultiContainer containerId={"requests"} position={"bottom-right"}/> */}
      <Outlet />
    </>
  );
};
export default RootLayout;
