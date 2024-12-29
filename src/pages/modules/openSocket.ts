import { w3cwebsocket } from "websocket";

export function openSocket(
  accessToken: string | undefined
): w3cwebsocket | null {
  console.log("oppening socket");
  let notif = new w3cwebsocket(
    `${process.env.BACKEND_API_SOCKETS}/ws/notification/?token=${accessToken}`
  );
  console.log(notif);
  if (
    notif.readyState !== w3cwebsocket.CLOSING &&
    notif.readyState !== w3cwebsocket.CLOSED
  )
    return notif;
  return null;
}
