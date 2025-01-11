import { w3cwebsocket } from "websocket";

export function closeSocket(socket: w3cwebsocket | null) {
  console.log("cleaning funtion in APPPPPPPPPPPPPPPPPPPPPP");
  if (!socket) return;
  if (socket?.readyState !== w3cwebsocket.CLOSED || socket.readyState !== w3cwebsocket.CLOSING) {
    console.log("closing the socket");
    socket.close(1000,"close by alvares");
    return true;
  }
  if (socket.readyState === w3cwebsocket.CONNECTING)
    console.log("trying to close socket but socket not closed");
  return false;
}
