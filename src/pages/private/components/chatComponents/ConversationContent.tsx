import { profileIcon } from "@/media-exporting";
import { useParams } from "react-router-dom";
import { chatConversationContent } from "../../styles";
import { useContext, useLayoutEffect, useRef } from "react";
import { ChatDataContext } from "@/src/customDataTypes/ChatDataContext";
import { IMessageEvent, w3cwebsocket } from "websocket";
import { SocketJsonValueType } from "@/src/pages/modules/watchSocket";

import { toast } from "react-toastify";


import UseInfiniteScroll from "@/src/services/hooks/UseInfiniteScroll";
import { MessagesDataType } from "@/src/customDataTypes/MessagesDataType";
import { useSelector } from "react-redux";
import { RootState, store } from "@/src/states/store";
import { setMessages } from "@/src/states/authentication/messagesSlice";

const listenForChatSocket = (
  chatSocket: w3cwebsocket | null
) => {
  if (chatSocket && chatSocket.readyState === w3cwebsocket.OPEN) {
    chatSocket.onmessage = (dataEvent: IMessageEvent) => {
      let json_data: SocketJsonValueType = null;
      json_data = JSON.parse(dataEvent.data as string);
      console.log(json_data);
      if (json_data?.type !== "error")
        store.dispatch(setMessages([...store.getState().messages.value, json_data.message]))
      else toast.warn(json_data.message, { containerId: "validation" });
    };
  }
};
let url : string = "/chat/messages/";
const ConversationContent = () => {
  const { userName } = useParams();
  const refChatConversationContent = useRef<HTMLDivElement>(null);
  const messageEndRef = useRef<HTMLDivElement>(null);
  const messages = useSelector((state: RootState) => state.messages.value)
  useLayoutEffect(() => {
    store.dispatch(setMessages([]))
  },[userName])
  const { isLoading, hasMore, handleScroll } =
    UseInfiniteScroll<MessagesDataType>({
      url: url,
      refElement: refChatConversationContent.current,
      messageEndRef: messageEndRef.current,
      offset: 200,
    });
  const chatContext = useContext(ChatDataContext);
  // this should be removed at production phase from all component it exist in
  if (!chatContext)
    throw new Error("this component need to be wrapped by chat context");
  const { chatSocket } = chatContext;
  listenForChatSocket(chatSocket);
  let previousMsgOwner = " ";
  return (
    <>
      <div
        className={chatConversationContent}
        ref={refChatConversationContent}
        onScroll={handleScroll}
      >
        {isLoading && <p className="loading-messages"> Loading more messages...</p>}
        {!hasMore && <p className="no-more-messages"> no more messages...</p>}
        {messages.map((convers, index) => (
          <div
            className={`${(
              previousMsgOwner !== convers.sender.username
            ).toString()}`}
            key={index}
          >
            {convers.sender.username === userName && (
              <div className="MessagesOfOther">
                {previousMsgOwner !== userName ? (
                  <img
                    src={
                      convers.sender.avatar
                        ? process.env.BACKEND_API_URL + convers.sender.avatar
                        : profileIcon
                    }
                    alt={`img of ${userName}`}
                    className=""
                  />
                ) : (
                  <div className=""></div>
                )}
                <p className="">{convers.message}</p>
              </div>
            )}
            {convers.sender.username !== userName && (
              <div className="MessagesOfOwner">
                <p className="">{convers.message}</p>
              </div>
            )}
            {(previousMsgOwner = convers.sender.username) && <></>}
          </div>
        ))}
        <div ref={messageEndRef}>end</div>
      </div>
    </>
  );
};

export default ConversationContent;
