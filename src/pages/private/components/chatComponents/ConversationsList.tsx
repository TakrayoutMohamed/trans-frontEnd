import { ChangeEvent, useContext, useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import UsersChatCard from "./UsersChatCard";
import { chatConversationsList } from "../../styles";
import TabListHeaders from "./TabListHeaders";
import { ChatDataContext } from "@/src/customDataTypes/ChatDataContext";
import { RootState } from "@/src/states/store";
import { useSelector } from "react-redux";
import { UserDataType } from "@/src/customDataTypes/UserDataType";
import FriendsChatCard from "./FriendsChatCard";
import { axiosPrivate } from "@/src/services/api/axios";

export type ConversationListDataType = UserDataType;

function searchFilter(
  event: ChangeEvent<HTMLInputElement>,
  conversationsListData: ConversationListDataType[],
  setConversationsList: React.Dispatch<React.SetStateAction<ConversationListDataType[]>>
) {
  event.preventDefault();
  const filteredSearchData = conversationsListData.filter((conversation) => {
    return conversation.username
      ?.toLowerCase()
      .includes(event.target.value.toLowerCase());
  });
  // console.log(event.target.value);
  // console.log(filteredSearchData.length);
  filteredSearchData.length < 1
    ? (event.target.style.color = "red")
    : (event.target.style.color = "white");
  filteredSearchData.length > 0 && setConversationsList(filteredSearchData);
}
let conversationsListData: ConversationListDataType[] = [];

const ConversationsList = () => {
  const conversations = useSelector((state: RootState) => state.conversations.value)
  const [conversationsList, setConversationsList] = useState<
    ConversationListDataType[]
  >(conversations);
  useEffect(() => {
    setConversationsList(conversations);
  }, [conversations]);
  const chatContext = useContext(ChatDataContext);
  if (!chatContext)
    throw new Error("this component should be wrapped inside a chatContext");
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
            onChange={(event) =>
              searchFilter(event, conversationsListData, setConversationsList)
            }
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="message">Message</div>
        <TabListHeaders />
        <div className="tab-content mt-3" id="tab-content">
            <UsersChatCard/>
            <FriendsChatCard />
        </div>
      </div>
    </>
  );
};

export default ConversationsList;
