import { ICloseEvent, IMessageEvent, w3cwebsocket } from "websocket";
import { trigerRightEvent } from "./trigerRightEvent";
import { AxiosInstance } from "axios";

export type SocketJsonValueType = string | number | boolean | null | SocketJsonValueType[] | any;

export const watchSocket = (axiosPrivateHook: AxiosInstance, client: w3cwebsocket) => {
    console.log("in watchSocket");
  
    client.onmessage = (dataEvent: IMessageEvent): SocketJsonValueType => {
      let json_data: SocketJsonValueType = null;
      json_data = JSON.parse(dataEvent.data as string);
      trigerRightEvent(axiosPrivateHook, json_data);
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