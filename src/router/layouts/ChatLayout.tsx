import { Outlet } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { chatLayout } from "../styles";
import { useState } from "react";
import ConversationsList from "@/src/pages/private/components/chatComponents/ConversationsList";
import '@router/styles/chatGlobalOverridingStyles.css';


const ChatLayout = () => {
  const [isProfileVisible, setProfileVisible] = useState<boolean>(true);

  console.log("chat layout reloaded")
  return (
    <Fragment>
      <div className={`${chatLayout}`}>
        <div className="bg-danger d-none d-sm-block p-5"></div>
        <main className="" id="main">
          <section className="section1 d-n" id="section1">
          {/* the component of the chat previous conversations */}
            <ConversationsList />
          {/* the component of the chat content */}
            <Outlet context={setProfileVisible}/>
          </section>
          <section className={`section2 ${!isProfileVisible && "d-none"}`} id="section2">
          {/* the component of the profile component in chat */}
            profile component
          </section>
        </main>
      </div>
    </Fragment>
  );
};

export default ChatLayout;
