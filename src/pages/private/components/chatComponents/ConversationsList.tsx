import { ChangeEvent, memo, useContext, useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import UsersChatCard from "./UsersChatCard";
import { chatConversationsList } from "../../styles";
import TabListHeaders from "./TabListHeaders";
import UseAxiosPrivate from "@/src/services/hooks/UseAxiosPrivate";
import { AxiosInstance } from "axios";
import { UserDataType } from "@/src/states/authentication/userSlice";
import { ChatDataContext } from "@/src/customDataTypes/ChatDataContext";
import { store } from "@/src/states/store";

export type ConversationList = UserDataType;

function searchFilter(
  event: ChangeEvent<HTMLInputElement>,
  conversationsListData: ConversationList[],
  setConversationsList: React.Dispatch<React.SetStateAction<ConversationList[]>>
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

const ConversationsList = () => {
  const axiosPrivateHook = UseAxiosPrivate();
  const [conversationsList, setConversationsList] = useState<
    ConversationList[]
  >([]);
  useEffect(() => {
    const fetchConversationsList = async (axiosPrivateHook: AxiosInstance) => {
      try {
        const res = await axiosPrivateHook.get("chat/conversations");
        // console.log(res.data.results);
        conversationsListData = res.data.results;
        setConversationsList(res.data.results);
      } catch (err) {
        console.log("err in conversations list");
        console.log(err);
      }
    };
    fetchConversationsList(axiosPrivateHook);
  }, []);
  const chatContext = useContext(ChatDataContext);
  // console.log(chatContext);
  if (!chatContext)
    throw new Error("this component should be wrapped inside a chatContext")
  let conversationsListData: ConversationList[] = [];
  const unreadConversations = store.getState().friends.value;

  // console.log("conversations list re-rendered");
  // console.log(conversationsList);
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
          <div
            className="tab-pane active"
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
              <div>you have no Friends!</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(ConversationsList);
