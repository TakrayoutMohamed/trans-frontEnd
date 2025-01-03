import { profileIcon } from "@/media-exporting";
import { useParams } from "react-router-dom";
import { chatConversationContent } from "../../styles";
import { useContext, useEffect, useRef } from "react";
import { ChatDataContext } from "@/src/customDataTypes/ChatDataContext";
import { IMessageEvent, w3cwebsocket } from "websocket";
import { SocketJsonValueType } from "@/src/pages/modules/watchSocket";

import { toast } from "react-toastify";

import { MessagesDataType } from "../../ChatArea";

import { UseInfiniteScroll } from "@/src/services/hooks/UseInfiniteScroll";

interface ConversationContentProps {
  messages: MessagesDataType[];
  setMessages: React.Dispatch<React.SetStateAction<MessagesDataType[]>>;
}

const listenForChatSocket = (
  chatSocket: w3cwebsocket | null,
  setMessages: React.Dispatch<React.SetStateAction<MessagesDataType[]>>
) => {
  if (chatSocket && chatSocket.readyState === w3cwebsocket.OPEN) {
    chatSocket.onmessage = (dataEvent: IMessageEvent) => {
      let json_data: SocketJsonValueType = null;
      json_data = JSON.parse(dataEvent.data as string);
      console.log(json_data);
      if (json_data?.type !== "error")
        setMessages((prev: MessagesDataType[]) => {
          return [...prev, json_data.message];
        });
      else toast.warn(json_data.message, { containerId: "validation" });
    };
  }
};

const ConversationContent = ({
  setMessages,
  messages,
}: ConversationContentProps) => {
  const { userName } = useParams();
  const refChatConversationContent = useRef<HTMLDivElement>(null);
  const messageEndRef = useRef<HTMLDivElement>(null);
  const { isLoading, hasMore, handleScroll } =
    UseInfiniteScroll<MessagesDataType>({
      url: `/chat/messages/?username=${userName}`,
      setData: setMessages,
      data: messages,
      username: userName,
      refElement: refChatConversationContent.current,
      messageEndRef: messageEndRef.current,
      offset: 200,
    });

  const chatContext = useContext(ChatDataContext);
  // this should be removed at production phase from all component it exist in
  if (!chatContext)
    throw new Error("this component need to be wrapped by chat context");
  const { chatSocket } = chatContext;
  listenForChatSocket(chatSocket, setMessages);
  let previousMsgOwner = " ";
  // console.log(refChatConversationContent);
  // console.log(refChatConversationContent.current?.scrollTop);
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({behavior:"smooth"});
  }, [])
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
