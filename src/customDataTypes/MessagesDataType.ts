import { UserDataType } from "../states/authentication/userSlice";

export interface MessagesDataType {
    sender: UserDataType;
    message: string;
    updated_at: string;
  }