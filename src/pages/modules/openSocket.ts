import { w3cwebsocket } from "websocket";

export function openSocket(
  socketConnectionEndPoint : string,
  accessToken: string | undefined
): w3cwebsocket | null {
  console.log("oppening socket");
  let clientSocket = new w3cwebsocket(
    `${process.env.BACKEND_API_SOCKETS}/${socketConnectionEndPoint}/?token=${accessToken}`
  );
  console.log(clientSocket);
  if (
    clientSocket.readyState !== w3cwebsocket.CLOSING &&
    clientSocket.readyState !== w3cwebsocket.CLOSED
  )
    return clientSocket;
  return null;
}

