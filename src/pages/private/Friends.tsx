import { blockIcon, profileIcon } from "@/media-exporting";
import { friends } from "./styles";
import { TfiTrash } from "react-icons/tfi";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";

const data = [
  {
    username: "alvares1",
    first_name: "alvares",
    last_name: "negredo",
    level: "12.25s",
    photo: "user1photo",
  },
  {
    username: "alvares2",
    first_name: "alvares",
    last_name: "negredo",
    level: "12.25",
    photo: "user1photo",
  },
  {
    username: "alvares3",
    first_name: "alvares",
    last_name: "negredo",
    level: "12.25",
    photo: "user1photo",
  },
  {
    username: "alvares4",
    first_name: "alvares",
    last_name: "negredo",
    level: "12.25",
    photo: "user1photo",
  },
  {
    username: "alvares5",
    first_name: "alvares",
    last_name: "negredo",
    level: "12.25",
    photo: "user1photo",
  },
  {
    username: "alvares6",
    first_name: "alvares",
    last_name: "negredo",
    level: "12.25",
    photo: "user1photo",
  },
  {
    username: "alvares7",
    first_name: "alvares",
    last_name: "negredo",
    level: "12.25",
    photo: "user1photo",
  },
  {
    username: "alvares8",
    first_name: "alvares",
    last_name: "negredo",
    level: "12.25",
    photo: "user1photo",
  },
  {
    username: "alvares9",
    first_name: "alvares",
    last_name: "negredo",
    level: "12.25",
    photo: "user1photo",
  },
  {
    username: "alvares10",
    first_name: "alvares",
    last_name: "negredo",
    level: "12.25",
    photo: "user1photo",
  },
  {
    username: "alvares11",
    first_name: "alvares",
    last_name: "negredo",
    level: "12.25",
    photo: "user1photo",
  },
  {
    username: "alvares12",
    first_name: "alvares",
    last_name: "negredo",
    level: "12.25",
    photo: "user1photo",
  },
  {
    username: "alvares13",
    first_name: "alvares",
    last_name: "negredo",
    level: "12.25",
    photo: "user1photo",
  },
  {
    username: "alvares14",
    first_name: "alvares",
    last_name: "negredo",
    level: "12.25",
    photo: "user1photo",
  },
  {
    username: "alvares15",
    first_name: "alvares",
    last_name: "negredo",
    level: "12.25",
    photo: "user1photo",
  },
  {
    username: "alvares16",
    first_name: "alvares",
    last_name: "negredo",
    level: "12.25",
    photo: "user1photo",
  },
  {
    username: "alvares17",
    first_name: "alvares",
    last_name: "negredo",
    level: "12.25e",
    photo: "user1photo",
  },
];

const blockUser = (username: string): void => {
  console.log(username);
  //here i have to send a block request to server to  block this user and also remove it from friends list
};

const Friends = () => {
  return (
    <div className={`${friends}`}>
      <div className="">
        {data &&
          data.length &&
          data.map((friend, index) => (
            <div className="friends-card" key={index}>
              <Link
                to={`/profile/` + friend.username}
                className="user-image-name-level"
              >
                <div className="user-image">
                  <div className="">
                    <img
                      src={profileIcon}
                      alt=""
                      className="rounded-5 bg-info"
                    />
                  </div>
                </div>
                <div className="user-name-level">
                  <div className="user-name">
                    {friend.first_name + " " + friend.last_name}
                  </div>
                  <div className="user-level"> lvl. {friend.level}</div>
                </div>
              </Link>
              <div className="invite-remove-button">
                <div className="invite-button">invite</div>
                <div className="remove-button">
                  <TfiTrash />
                </div>
              </div>
              <div
                className="collapse-button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <BsThreeDots size={30} color="white" />
              </div>
              <div className="dropdown-menu">
                <div
                  className="block"
                  onClick={() => blockUser(friend.username)}
                >
                  <span className="">
                    <img src={blockIcon} width={20} alt="" />
                  </span>
                  block {friend.username}!
                </div>
                <Link
                  to={`/profile/` + friend.username}
                  className="view-profile"
                >
                  <span className="">
                    <img src={profileIcon} width={20} alt="" />
                  </span>
                  view profile
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Friends;
