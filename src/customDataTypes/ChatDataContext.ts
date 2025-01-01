import { w3cwebsocket } from "websocket";
import { UserDataType } from "../states/authentication/userSlice";
import { createContext } from "react";

type ChatDataContextType = {
    userData: UserDataType | undefined;
    setUserData: React.Dispatch<React.SetStateAction<UserDataType | undefined>>;
    chatSocket: w3cwebsocket | null;
  };
  
  export const ChatDataContext: React.Context<ChatDataContextType | undefined> =
    createContext<ChatDataContextType | undefined>(undefined);