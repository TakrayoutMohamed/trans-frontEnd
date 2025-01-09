import { w3cwebsocket } from "websocket";
import { useSelector } from "react-redux";
import { RootState } from "@/src/states/store";
import { useEffect } from "react";
import { isValidAccessToken } from "@/src/pages/modules/fetchingData";
import { openSocket } from "@/src/pages/modules/openSocket";
import { watchSocket } from "@/src/pages/modules/watchSocket";
import { closeSocket } from "@/src/pages/modules/closeSocket";

interface useHandleSocketsProps {
  urlOfSocket: string;
  client: w3cwebsocket | null;
}

const useHandleSockets = ({
  urlOfSocket,
  client = null,
}: useHandleSocketsProps) => {
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
            client = openSocket(urlOfSocket, accessToken + "");
          if (client) {
            console.log("befor watching socket");
            watchSocket(client);
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
    }
    return () => {
      console.log("cleaning funtion in APPPPPPPPPPPPPPPPPPPPPP");
      closeSocket(client) && (client = null);
    };
  }, [accessToken]);
};

export { useHandleSockets };
