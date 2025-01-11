import { w3cwebsocket } from "websocket";
import { useEffect, useState } from "react";
import { openSocket } from "@/src/pages/modules/openSocket";
import { watchSocket } from "@/src/pages/modules/watchSocket";

interface useHandleSocketsProps {
  urlOfSocket: string;
  accessToken?: string;
}

const useHandleSockets = ({
  urlOfSocket,
  accessToken,
}: useHandleSocketsProps) => {
  const [client, setClient] = useState<w3cwebsocket | null>(null);
  const handleSockets = async () => {
    console.log("json_data");
    console.log("json_data2");
    if (
      !client ||
      (client.readyState !== w3cwebsocket.OPEN &&
        client.readyState !== w3cwebsocket.CONNECTING)
    )
      setClient(openSocket(urlOfSocket, accessToken));
    console.log(client);
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
  };
  useEffect(() => {
    handleSockets();
  }, [accessToken]);
  return { client, setClient };
};

export { useHandleSockets };
