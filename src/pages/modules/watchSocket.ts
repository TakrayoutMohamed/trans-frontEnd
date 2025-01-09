import { ICloseEvent, IMessageEvent, w3cwebsocket } from "websocket";
import { trigerRightEvent } from "./trigerRightEvent";

export type SocketJsonValueType =
  | string
  | number
  | boolean
  | null
  | SocketJsonValueType[]
  | any;

export const watchSocket = (client: w3cwebsocket) => {
  console.log("in watchSocket");

  client.onmessage = (dataEvent: IMessageEvent): SocketJsonValueType => {
    let json_data: SocketJsonValueType = null;
    json_data = JSON.parse(dataEvent.data as string);
    trigerRightEvent(json_data);
  };
  client.onclose = (closeEvent: ICloseEvent) => {
    console.log("close event in socket ");
    console.log(closeEvent);
  };
  client.onerror = (errorEvent: Error) => {
    console.log("error in socket ");
    console.log(errorEvent);
  };
};
