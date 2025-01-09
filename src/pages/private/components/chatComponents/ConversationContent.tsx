import { profileIcon } from "@/media-exporting";
import { useParams } from "react-router-dom";
import { chatConversationContent } from "../../styles";
import { useContext, useRef } from "react";
import { ChatDataContext } from "@/src/customDataTypes/ChatDataContext";
import { IMessageEvent, w3cwebsocket } from "websocket";
import { SocketJsonValueType } from "@/src/pages/modules/watchSocket";

import { toast } from "react-toastify";

import { useInfiniteScroll } from "@/src/services/hooks/useInfiniteScroll";
import { MessagesDataType } from "@/src/customDataTypes/MessagesDataType";
import { useSelector } from "react-redux";
import { RootState, store } from "@/src/states/store";
import { setMessages } from "@/src/states/authentication/messagesSlice";
import { setMessagesData } from "@/src/pages/modules/setAuthenticationData";
import { axiosPrivate } from "@/src/services/api/axios";

const listenForChatSocket = (chatSocket: w3cwebsocket | null) => {
  if (chatSocket && chatSocket.readyState === w3cwebsocket.OPEN) {
    chatSocket.onmessage = (dataEvent: IMessageEvent) => {
      let json_data: SocketJsonValueType = null;
      json_data = JSON.parse(dataEvent.data as string);
      console.log(json_data);
      if (json_data?.type !== "error")
        store.dispatch(
          setMessages([...store.getState().messages.value, json_data.message])
        );
      else toast.warn(json_data.message, { containerId: "validation" });
    };
  }
};

const fetchingMessagesData = (url: string, page?: number, username?: string) => {
  let requestParams = {}
  if (page)
    requestParams = {...requestParams, page: page};
  if (username)
    requestParams = {...requestParams, username: username};
  return axiosPrivate.get(url, {
    params: requestParams
  });
}

let url: string = "/chat/messages/";
const ConversationContent = () => {
  const { userName } = useParams();
  const refChatConversationContent = useRef<HTMLDivElement>(null);
  const messageEndRef = useRef<HTMLDivElement>(null);
  const messages = useSelector((state: RootState) => state.messages.value);
  const { isLoading, hasMore, handleScroll } =
    useInfiniteScroll<MessagesDataType>({
      url: url,
      refElement: refChatConversationContent.current,
      startPositionRef: messageEndRef.current,
      data: messages,
      setData: setMessagesData,
      offset: 200,
      username: userName,
      scrollDirection: "top",
      fetchingData: fetchingMessagesData
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
        {isLoading && (
          <div className="loading-messages">
            <div className="spinner-border text-secondary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        {!hasMore && (
          <div className="no-more-messages"> no more messages...</div>
        )}
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
        <div ref={messageEndRef} />
      </div>
    </>
  );
};

export default ConversationContent;
