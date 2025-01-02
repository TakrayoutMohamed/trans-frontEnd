import { profileIcon } from "@/media-exporting";
import { ConversationList } from "./ConversationsList";
import { chatUsersChatCard } from "../../styles";
import { Link } from "react-router-dom";

type UsersChatCardProps = {
  conversations: ConversationList[];
};

const UsersChatCard = ({ conversations }: UsersChatCardProps) => {
  // console.log("users chat card re-rendered");
  // console.log(conversations);

  const r = (Math.random() + 1).toString(36).substring(7);
  return (
    <>
      {conversations.map(
        ({
          username = "UserName",
          first_name,
          last_name,
          is_online = false,
          avatar = undefined,
          unreadMsg = 0,
        }) => (
          <Link
            to={username + ""}
            className={`${chatUsersChatCard}`}
            key={username}
          >
            <div className="" id="userImage">
              <div className="">
                <svg className="">
                  <pattern
                    id={`pattImage${r}`}
                    x="0"
                    y="0"
                    height="100%"
                    width="100%"
                  >
                    <image
                      x="0.1em"
                      width="100%"
                      height="100%"
                      y="0.1em"
                      href={
                        avatar
                          ? process.env.BACKEND_API_URL + avatar
                          : profileIcon
                      }
                    />
                  </pattern>
                  <circle
                    cx="1em"
                    cy="1em"
                    r="1em"
                    fill={`url(#pattImage${r})`}
                    stroke="lightblue"
                    strokeWidth="1"
                  />
                </svg>
                <svg className="">
                  {is_online && (
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
              <p className="">
                {first_name ? first_name : "????????"}{" "}
                {last_name ? last_name : "???????"}
              </p>
              <small className={``}>{username}</small>
            </div>
            <div
              className={`${(!unreadMsg || unreadMsg < 1) && "invisible"}`}
              id="unreadMsgs"
            >
              <svg width="18px" height="18px">
                <circle cx="50%" cy="50%" fill="#1f77b4" r="50%" />
                <text
                  x="50%"
                  y="50%"
                  fontSize="12"
                  textAnchor="middle"
                  alignmentBaseline="central"
                >
                  {unreadMsg}
                </text>
              </svg>
            </div>
          </Link>
        )
      )}
    </>
  );
};
export default UsersChatCard;
