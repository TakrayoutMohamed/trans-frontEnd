import { w3cwebsocket } from "websocket";

export function closeSocket(socket: w3cwebsocket | null) {
  console.log("cleaning funtion in APPPPPPPPPPPPPPPPPPPPPP");
  if (socket?.readyState === w3cwebsocket.OPEN) {
    console.log("closing the socket");
    socket.close();
    return true;
  }
  console.log("socket not closed");
  return false;
}
