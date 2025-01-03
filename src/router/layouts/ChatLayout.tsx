import { Outlet, useParams } from "react-router-dom";
import { chatLayout } from "../styles";
import { useEffect, useLayoutEffect, useState } from "react";
import ConversationsList from "@/src/pages/private/components/chatComponents/ConversationsList";
import "@router/styles/chatGlobalOverridingStyles.css";
import Profile from "./components/chat/Profile";
import { w3cwebsocket } from "websocket";
import { UserDataType } from "@/src/states/authentication/userSlice";
import UseAxiosPrivate from "@/src/services/hooks/UseAxiosPrivate";
import { ChatDataContext } from "@/src/customDataTypes/ChatDataContext";
import { openSocket } from "@/src/pages/modules/openSocket";
import { store } from "@/src/states/store";
import { closeSocket } from "@/src/pages/modules/closeSocket";

let chatSocket_: w3cwebsocket | null = null;

const ChatLayout = () => {
  const [isProfileVisible, setProfileVisible] = useState<boolean>(false);
  const axiosPrivateHook = UseAxiosPrivate();
  const [userData, setUserData] = useState<UserDataType | undefined>(undefined);
  const { userName } = useParams();
  useLayoutEffect(() => {
    
    chatSocket_ = openSocket("chat", store.getState().accessToken.value);
    return () => {
      closeSocket(chatSocket_);
    };
  }, []);
  useEffect(() => {
    if (!(userData?.username === userName) && userName) {
      axiosPrivateHook
        .post("search_username", {
          username: userName,
        })
        .then((res) => {
          setUserData(res.data.user);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },[userName])

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
