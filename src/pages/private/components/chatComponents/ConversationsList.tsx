import { memo, useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import UsersChatCard from "./UsersChatCard";
import { chatConversationsList } from "../../styles";
import TabListHeaders from "./TabListHeaders";

export interface ConversationList {
  userName: string;
  isActive: boolean;
  isWriting: boolean;
  unreadMsg: number;
}

const ConversationListData: ConversationList[] = [
  { userName: "name", isActive: true, isWriting: true, unreadMsg: 3 },
  { userName: "name1", isActive: false, isWriting: false, unreadMsg: 2 },
  { userName: "name2", isActive: true, isWriting: true, unreadMsg: 0 },
  { userName: "name3", isActive: false, isWriting: false, unreadMsg: 0 },
  { userName: "name4", isActive: false, isWriting: false, unreadMsg: 1 },
  { userName: "name5", isActive: false, isWriting: false, unreadMsg: 0 },
  { userName: "name6", isActive: true, isWriting: true, unreadMsg: 3 },
  { userName: "name7", isActive: true, isWriting: true, unreadMsg: 20 },
];

function searchFilter(e, setConversationsList, ConversationListData) {
  e.preventDefault();
  setConversationsList(
    ConversationListData.filter((conversation) =>
      conversation.userName.toLowerCase().includes(e.target.value.toLowerCase())
    )
  );
}

const ConversationsList = () => {
  const [conversationsList, setConversationsList] = useState<
    ConversationList[]
  >([]);
  useEffect(() => {
    setConversationsList(ConversationListData);
  }, [ConversationListData]);
  const unreadConversations = conversationsList.filter(
    (conversation) => conversation.unreadMsg > 0
  );
  console.log("conversations list re-rendered");
  return (
    <>
      <div className={`${chatConversationsList}`}>
        <div className="input-groupss" id="searchInput">
          <span className="input-group-texts" id="basic-addon1">
            <BiSearch />
          </span>
          <input
            type="text"
            name="search"
            className="form-controlss"
            placeholder="Search......."
            onChange={(e) =>
              searchFilter(e, setConversationsList, ConversationListData)
            }
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="">Message</div>
        <TabListHeaders />
        <div className="tab-content mt-3" id="tab-content">
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
            {unreadConversations.length ? (
              <UsersChatCard conversations={unreadConversations} />
            ) : (
              <div>you have seen all your chats!</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(ConversationsList);
