import { Outlet, useParams } from "react-router-dom";
import { chatLayout } from "../styles";
import { useLayoutEffect, useState } from "react";
import ConversationsList from "@/src/pages/private/components/chatComponents/ConversationsList";
import "@router/styles/chatGlobalOverridingStyles.css";
import Profile from "./components/chat/Profile";
import { w3cwebsocket } from "websocket";
import { ChatDataContext } from "@/src/customDataTypes/ChatDataContext";
import { openSocket } from "@/src/pages/modules/openSocket";
import { store } from "@/src/states/store";
import { closeSocket } from "@/src/pages/modules/closeSocket";
import { UserDataType } from "@/src/customDataTypes/UserDataType";

let chatSocket_: w3cwebsocket | null = null;

const ChatLayout = () => {
  const [isProfileVisible, setProfileVisible] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserDataType | undefined>(undefined);
  // const { userName } = useParams();

  useLayoutEffect(() => {
    if (!chatSocket_ || chatSocket_.readyState !== w3cwebsocket.OPEN)
      chatSocket_ = openSocket("chat", store.getState().accessToken.value);
    return () => {
      closeSocket(chatSocket_);
    }
  },[])

  return (
    <ChatDataContext.Provider
      value={{ userData, setUserData, chatSocket: chatSocket_ }}
    >
      <div className={`${chatLayout}`}>
        <main className="bg-infos" id="main">
          <section className="section1" id="section1">
            {/* the component of the chat previous conversations */}
            <ConversationsList />
          </section>
          <section className="" id="sectionOfChat">
            {/* the component of the chat content */}
            <Outlet context={setProfileVisible} />
          </section>
          <section
            className={`${!isProfileVisible && "d-none"} `}
            id="section2"
          >
            <Profile isProfileVisible={isProfileVisible} />
          </section>
        </main>
      </div>
    </ChatDataContext.Provider>
  );
};

export default ChatLayout;
