import { w3cwebsocket } from "websocket";
import { useEffect, useState } from "react";
import { openSocket } from "@/src/pages/modules/openSocket";
import { watchSocket } from "@/src/pages/modules/watchSocket";
import { useSelector } from "react-redux";
import { RootState } from "@/src/states/store";

interface useHandleSocketsProps {
  urlOfSocket: string;
  accessToken?: string;
}

const useHandleSockets = ({
  urlOfSocket,
  accessToken,
}: useHandleSocketsProps) => {
  const isAuthenticated = useSelector((state: RootState) => state.authenticator.value)
  const [client, setClient] = useState<w3cwebsocket | null>(null);
  const handleSockets = async () => {
    if (
      !client ||
      (client.readyState !== w3cwebsocket.OPEN &&
        client.readyState !== w3cwebsocket.CONNECTING)
    )
      setClient(openSocket(urlOfSocket, accessToken));
    if (client) {
      watchSocket(client);
      if (client.readyState === w3cwebsocket.CLOSING) {
      }
      if (client.readyState === w3cwebsocket.CLOSED) {
      }
    }
  };
  useEffect(() => {
    if (isAuthenticated)
      handleSockets();
  }, [isAuthenticated, accessToken]);
  return { client, setClient };
};

export { useHandleSockets };
