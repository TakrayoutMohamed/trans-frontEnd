import { profileIcon, visibilityProfileIcon } from "@/media-exporting";
import { useOutletContext, useParams } from "react-router-dom";
import { chat } from "./styles";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { SlEmotsmile } from "react-icons/sl";
import ConversationContent from "./components/chatComponents/ConversationContent";

// interface ProfileVisibilite {
//   setProfileVisible: React.Dispatch<React.SetStateAction<boolean>>;
// }

const ChatArea = () => {
  const { userName } = useParams();
  const setProfileVisible =
    useOutletContext<React.Dispatch<React.SetStateAction<boolean>>>();
  console.log("chat area reloaded");
  return (
    <>
      <div className={`${chat}`}>
        <div
          id="chatAreaHeader"
        >
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
          <div className="d-flex align-items-center ms-auto py-2 " onClick={() => setProfileVisible((prev) => !prev)}>
            <svg
              width="1.5em"
              height="1.5em"
              className="bg-secondary bg-opacity-50 rounded-5 h-100"
            >
              <image
                x="0"
                y="0"
                width="100%"
                height="100%"
                href={visibilityProfileIcon}
                style={{cursor:"pointer"}}
              />
            </svg>
          </div>
        </div>
        <div className="chatContent">
          <div className="messagesArea"><ConversationContent/></div>
          <form className="sendMessageField" method="post" action="#">
            <span className=""><SlEmotsmile size={30}/></span>
            <input type="text" placeholder="Type..." name="textMessage" className="" />
            <span className=""><IoArrowForwardCircleOutline size={30}/></span>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChatArea;
