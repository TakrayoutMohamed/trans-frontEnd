import { profileIcon } from "@/media-exporting";
import { chatUsersChatCard } from "../../styles";
import { Link } from "react-router-dom";
import { RootState } from "@/src/states/store";
import { useSelector } from "react-redux";

const FriendsChatCard = () => {
  let friends = useSelector((state: RootState) => state.friends.value)
  const r = (Math.random() + 1).toString(36).substring(20);
  // friends = [
  //   ...friends,
  //   ...friends,
  //   ...friends,
  //   ...friends,
  //   ...friends,
  //   ...friends,
  //   ...friends,
  //   ...friends,
  //   ...friends
  // ]
  return (
    <>
      {friends.map(
        (friend) => (
          <Link
            to={friend.username + ""}
            className={`${chatUsersChatCard}`}
            key={friend.username + " friends"}
          >
            <div className="" id="userImage">
              <div className="">
                <svg className="">
                  <pattern
                    id={`pattImage${r + friend.username}friends`}
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
                        friend.avatar
                          ? process.env.BACKEND_API_URL + friend.avatar
                          : profileIcon
                      }
                    />
                  </pattern>
                  <circle
                    cx="1em"
                    cy="1em"
                    r="1em"
                    fill={`url(#pattImage${r+ friend.username}friends)`}
                    stroke="lightblue"
                    strokeWidth="1"
                  />
                </svg>
                <svg className="">
                  {friend.is_online && (
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
                {friend.first_name ? friend.first_name : "????????"}{" "}
                {friend.last_name ? friend.last_name : "???????"}
              </p>
              <small className={``}>{friend.username}</small>
            </div>
          </Link>
        )
      )}
    </>
  );
};
export default FriendsChatCard;
