import { profileIcon } from "@/media-exporting";
import { useParams } from "react-router-dom";
import { chatConversationContent } from "../../styles";
import { useContext, useEffect, useState } from "react";
import UseAxiosPrivate from "@/src/services/hooks/UseAxiosPrivate";
import { UserDataType } from "@/src/states/authentication/userSlice";
import { AxiosInstance } from "axios";
import { ChatDataContext } from "@/src/customDataTypes/ChatDataContext";
import { IMessageEvent, w3cwebsocket } from "websocket";
import { SocketJsonValueType } from "@/src/pages/modules/watchSocket";

interface MesasgesDataType {
  sender: UserDataType;
  message: string;
  updated_at: Date;
}

const ConversationContent = () => {
  const { userName } = useParams();
  const axiosPrivateHook = UseAxiosPrivate();
  const [messages, setMessages] = useState<MesasgesDataType[]>([])
  useEffect(() => {
    const getPreviousMsgs = async (axiosPrivateHook: AxiosInstance) => {
      try {
        const res = await axiosPrivateHook.get("/chat/messages/",{params:{username: userName}})
        setMessages(res.data.results);
      } catch (err) {
        console.log("err in Conversation Content");
        
        console.log(err);
      }
    }
    getPreviousMsgs(axiosPrivateHook);
  },[userName]);
  const chatContext = useContext(ChatDataContext);
  if (!chatContext)
    throw new Error("this component need to be wrapped by chat context");
  const {chatSocket} = chatContext;
  if (chatSocket && chatSocket.readyState === w3cwebsocket.OPEN) {
    chatSocket.onmessage = (dataEvent: IMessageEvent) => {
      let json_data: SocketJsonValueType = null;
      json_data = JSON.parse(dataEvent.data as string);
      console.log(json_data);
      setMessages([json_data.message, ...messages])
    };
  }
  console.log("conversation Content re-rendered");
  let previousMsgOwner = " ";
  return (
    <>
      {messages.map((convers, index) => (
        <div
          key={index}
          className={
            chatConversationContent +
            " " +
            `${(previousMsgOwner !== convers.sender?.username).toString()}`
          }
        >
          {convers.sender?.username === userName && (
            <div className="MessagesOfOther">
              {previousMsgOwner !== userName ? (
                <img
                  src={convers.sender?.avatar
                    ? process.env.BACKEND_API_URL + convers.sender?.avatar
                    : profileIcon}
                  alt={`img of ${userName}`}
                  className=""
                />
              ) : (
                <div className=""></div>
              )}
              <p className="">{convers.message}</p>
            </div>
          )}
          {convers.sender?.username !== userName && (
            <div className="MessagesOfOwner">
              <p className="">{convers.message}</p>
            </div>
          )}
          {(previousMsgOwner = convers.sender?.username) && <></>}
        </div>
      ))}
    </>
  );
};

export default ConversationContent;
