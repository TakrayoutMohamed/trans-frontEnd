import { w3cwebsocket } from "websocket";

export function closeSocket(socket: w3cwebsocket | null) {
  console.log("cleaning funtion in APPPPPPPPPPPPPPPPPPPPPP");
  if (!socket) return;
  if (socket?.readyState === w3cwebsocket.OPEN) {
    console.log("closing the socket");
    socket.close();
    return true;
  }
  if (socket.readyState === w3cwebsocket.CONNECTING)
    console.log("trying to close socket but socket not closed");
  return false;
}
