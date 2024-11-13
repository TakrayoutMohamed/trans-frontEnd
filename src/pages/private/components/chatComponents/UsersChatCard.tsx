import { profileIcon } from "@/media-exporting";
import { ConversationList } from "./ConversationsList";
import { chatUsersChatCard } from "../../styles";

type UsersChatCardProps = {
  conversations: ConversationList[];
};

const UsersChatCard = ({ conversations }: UsersChatCardProps) => {
  console.log("users chat card re-rendered");

  return (
    <>
      {conversations.map((conversation, index) => (
        <div className={`${chatUsersChatCard}`} key={index}>
          <div className="" id="userImage">
            <div className="">
              <svg className="">
                <pattern id="pattImage" x="0" y="0" height="100%" width="100%">
                  <image x="0" y="0" href={profileIcon} />
                </pattern>
                <circle
                  cx="1em"
                  cy="1em"
                  r="1em"
                  fill="url(#pattImage)"
                  stroke="lightblue"
                  stroke-width="1"
                />
              </svg>
              <svg className="">
                {conversation.isActive && (
                  <circle
                    className="position-absolutee"
                    cx="6px"
                    cy="6px"
                    r="6px"
                    fill="#21FF5FED"
                  />
                )}
              </svg>
            </div>
          </div>
          <div className="" id="userNameWriting">
            <p className="">{conversation.userName}</p>
            <small className={`${!conversation.isWriting && "invisible"} `}>
              Typing.......
            </small>
          </div>
          <div
            className={`${conversation.unreadMsg < 1 && "invisible"}`}
            id="unreadMsgs"
          >
            <span className="">{conversation.unreadMsg}</span>
          </div>
        </div>
      ))}
    </>
  );
};
export default UsersChatCard;
