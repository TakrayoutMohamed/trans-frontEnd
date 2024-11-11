import { memo, useState } from "react";
import { BiSearch } from "react-icons/bi";
import UsersChatCard from "./UsersChatCard";
import { chatConversationsList } from "../../styles";

export interface ConversationList {
  userName: string;
  isActive: boolean;
  isWriting: boolean;
  unreadMsg: number;
}

const ConversationListData: ConversationList[] = [
  { userName: "name", isActive: true, isWriting: false, unreadMsg: 3 },
  { userName: "name1", isActive: false, isWriting: false, unreadMsg: 2 },
  { userName: "name2", isActive: true, isWriting: true, unreadMsg: 0 },
  { userName: "name3", isActive: false, isWriting: false, unreadMsg: 0 },
  { userName: "name4", isActive: false, isWriting: false, unreadMsg: 1 },
  { userName: "name5", isActive: false, isWriting: false, unreadMsg: 0 },
  { userName: "name6", isActive: false, isWriting: true, unreadMsg: 3 },
];

const ConversationsList = () => {
  const [conversationsList, setConversationsList] = useState<ConversationList[]>(ConversationListData);
  // setConversationsList(ConversationListData);
  const unreadConversations = conversationsList.filter(
    (conversation) => conversation.unreadMsg > 0
  );
  console.log("conversations list re-rendered");
  return (
    <>
      <div className={`bg-success ${chatConversationsList}`}>
        <div className="input-group">
          <span className="input-group-text" id="basic-addon1">
            <BiSearch />
          </span>
          <input
            type="text"
            name="search"
            className="form-control"
            placeholder="Search......."
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="">Message</div>
        <ul className="nav nav-tabs " role="tablist">
          <li className="nav-item" role="presentation">
            <a
              className="nav-link active"
              id="all-msgs"
              data-bs-toggle="tab"
              href="#all-msgs-content"
              role="tab"
              aria-controls="all-msgs-content"
              aria-selected="true"
            >
              All Chats
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="unread-msgs"
              data-bs-toggle="tab"
              href="#unread-msgs-content"
              role="tab"
              aria-controls="unread-msgs-content"
              aria-selected="false"
            >
              unread
            </a>
          </li>
        </ul>
        <div className="tab-content" id="tab-content">
          <div
            className="tab-pane active bg-info"
            id="all-msgs-content"
            role="tabpanel"
            aria-labelledby="all-msgs"
          >
            <UsersChatCard conversations={conversationsList} />
          </div>
          <div
            className="tab-pane"
            id="unread-msgs-content"
            role="tabpanel"
            aria-labelledby="unread-msgs"
          >
            <UsersChatCard conversations={unreadConversations} />
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(ConversationsList);
