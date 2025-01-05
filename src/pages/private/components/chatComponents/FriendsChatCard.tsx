import { profileIcon } from "@/media-exporting";

import { chatUsersChatCard } from "../../styles";
import { Link } from "react-router-dom";
import { FriendsDataType } from "@/src/customDataTypes/FriendsDataType";

type UsersChatCardProps = {
  friends: FriendsDataType[];
  type?: string;
};

const FriendsChatCard = ({ friends, type }: UsersChatCardProps) => {

  const r = (Math.random() + 1).toString(36).substring(20);
  friends = [
    ...friends,
    ...friends,
    ...friends,
    ...friends,
    ...friends,
    ...friends,
    ...friends,
    ...friends,
    ...friends
  ]
  return (
    <>
      {friends.map(
        (conversationUser, index) => (
          <Link
            to={conversationUser.username + ""}
            className={`${chatUsersChatCard}`}
            key={index}
          >
            <div className="" id="userImage">
              <div className="">
                <svg className="">
                  <pattern
                    id={`pattImage${r + conversationUser.created_at + type}`}
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
                        conversationUser.avatar
                          ? process.env.BACKEND_API_URL + conversationUser.avatar
                          : profileIcon
                      }
                    />
                  </pattern>
                  <circle
                    cx="1em"
                    cy="1em"
                    r="1em"
                    fill={`url(#pattImage${r+ conversationUser.created_at + type})`}
                    stroke="lightblue"
                    strokeWidth="1"
                  />
                </svg>
                <svg className="">
                  {conversationUser.is_online && (
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
                {conversationUser.first_name ? conversationUser.first_name : "????????"}{" "}
                {conversationUser.last_name ? conversationUser.last_name : "???????"}
              </p>
              <small className={``}>{conversationUser.username}</small>
            </div>
          </Link>
        )
      )}
    </>
  );
};
export default FriendsChatCard;
