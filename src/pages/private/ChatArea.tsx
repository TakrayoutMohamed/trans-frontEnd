import { profileIcon, visibilityProfileIcon } from "@/media-exporting";
import { useOutletContext, useParams } from "react-router-dom";
import { chat } from "./styles";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { SlEmotsmile } from "react-icons/sl";
import ConversationContent from "./components/chatComponents/ConversationContent";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { ChatDataContext } from "@/src/customDataTypes/ChatDataContext";
import { UserDataType } from "@/src/states/authentication/userSlice";
import { w3cwebsocket } from "websocket";
import { store } from "@/src/states/store";

const MessageSchema = z.object({
  textMessage: z
    .string()
    .max(1023, { message: "the message should not be more than 1023 chars" })
    .min(1, { message: "not allowed to send an empty string" }),
});

type MessageSchemaType = z.infer<typeof MessageSchema>;

interface FormComponentProps {
  setMessages: React.Dispatch<React.SetStateAction<MessagesDataType[]>>;
}

const FormComponent = ({ setMessages }: FormComponentProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<MessageSchemaType>({ resolver: zodResolver(MessageSchema) });
  const chatContext = useContext(ChatDataContext);
  if (!chatContext) throw new Error("it should be wraped inside a chatContext");
  const { userData, chatSocket } = chatContext;
  const onSubmit: SubmitHandler<MessageSchemaType> = async (
    data: MessageSchemaType
  ) => {
    try {
      if (data.textMessage.length > 0) {
        let dataToSend = {
          receiver: userData?.username,
          message: data.textMessage,
        };
        if (chatSocket?.readyState === w3cwebsocket.OPEN) {
          chatSocket?.send(JSON.stringify(dataToSend));
          setMessages((prev) => {
            return [
              ...prev,
              {
                message: data.textMessage,
                sender: store.getState().user.value,
                updated_at: new Date().toISOString(),
              },
            ];
          });
          reset({ textMessage: "" });
        }
      }
    } catch (err) {
      console.log(err);
      console.log(errors);
    }
  };

  return (
    <>
      <form className="sendMessageField" onSubmit={handleSubmit(onSubmit)}>
        <span className="">
          <SlEmotsmile size={30} />
        </span>
        <input
          type="text"
          placeholder="Type..."
          {...register("textMessage", { required: true })}
          className=""
          autoComplete="on"
        />
        <button className="" type="submit">
          <IoArrowForwardCircleOutline size={30} />
        </button>
      </form>
    </>
  );
};
export interface MessagesDataType {
  sender: UserDataType;
  message: string;
  updated_at: string;
}

const ChatArea = () => {
  const { userName } = useParams();
  const setProfileVisible =
    useOutletContext<React.Dispatch<React.SetStateAction<boolean>>>();
  const [messages, setMessages] = useState<MessagesDataType[]>([]);
  useLayoutEffect(() => {
    setMessages([]);
  },[])
  return (
    <>
      <div className={`${chat}`}>
        <div id="chatAreaHeader">
          <div className="d-flex flex-row">
            <div className="" id="userImageInChat">
              <div className="">
                <svg className="">
                  <pattern
                    id={`pattImage_12`}
                    x="0"
                    y="0"
                    height="100%"
                    width="100%"
                  >
                    <image x="0" y="0" href={profileIcon} />
                  </pattern>
                  <circle
                    cx="1.5em"
                    cy="1.5em"
                    r="1.5em"
                    fill={`url(#pattImage_12)`}
                    stroke="lightblue"
                    strokeWidth="1"
                  />
                </svg>
              </div>
            </div>
            <div className="" id="userNameStatus">
              <p className="">{userName}</p>
              <small className={``}>active</small>
            </div>
          </div>
          <div
            className="d-flex align-items-center ms-auto py-2 "
            onClick={() => setProfileVisible((prev) => !prev)}
          >
            <svg
              width="1.5em"
              height="1.5em"
              className="profileVisibility bg-secondary bg-opacity-50"
            >
              <image
                x="0"
                y="0"
                width="100%"
                height="100%"
                href={visibilityProfileIcon}
              />
            </svg>
          </div>
        </div>
        <div className="chatContent">
          <div className="messagesArea">
            <ConversationContent
              messages={messages}
              setMessages={setMessages}
            />
          </div>
          <FormComponent setMessages={setMessages} />
        </div>
      </div>
    </>
  );
};

export default ChatArea;
