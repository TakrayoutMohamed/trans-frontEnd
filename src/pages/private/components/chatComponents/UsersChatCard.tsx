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
          <div className={`d-flex flex-row ${chatUsersChatCard}`} key={index}>
            <div className="position-relative">
              <img src={profileIcon} width="10px" alt="profile image" />
              <span className="position-absolute top-0 start-100 translate-midle bg-success rounded-circle"></span>
            </div>
            <div className="d-flex flex-column">
              <h6 className="">{conversation.userName}</h6>
              <p className="">{conversation.isWriting && "Typing......."}</p>
            </div>
            <div
              className={`ms-auto rounded-circle bg-success d-flex align-items-center justify-content-center ${
                conversation.unreadMsg < 1 && "d-none"
              }`}
              style={{ width: "20%"}}
            >
              {conversation.unreadMsg}
            </div>
          </div>
        ))}
      </>
    );
  };
export default UsersChatCard