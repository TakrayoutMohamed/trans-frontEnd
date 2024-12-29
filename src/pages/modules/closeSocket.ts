import { w3cwebsocket } from "websocket";

export function closeSocket(socket: w3cwebsocket | null) {
  if (socket?.readyState === w3cwebsocket.OPEN) {
    console.log("closing the socket");
    socket.close();
    return true;
  }
  return false;
}
