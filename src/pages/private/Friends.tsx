import { blockIcon, profileIcon } from "@/media-exporting";
import { friends } from "./styles";
import { TfiTrash } from "react-icons/tfi";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import UseAxiosPrivate from "@/src/services/hooks/UseAxiosPrivate";
import { axiosPrivate } from "@/src/services/api/axios";
import { RootState, store } from "@/src/states/store";
import { AxiosInstance } from "axios";
import { useSelector } from "react-redux";

const blockUser = (AxiosPrivateHook: AxiosInstance, username: string): void => {
  AxiosPrivateHook.post("block_user", { username: username })
    .then((res) => {
      console.log("res : you blocked this user");
      console.log(res);
    })
    .catch((err) => {
      console.log("error in blocking a user ");
      console.log(err);
    });
  //here i have to send a block request to server to  block this user
};

const Friends = () => {
  const AxiosPrivateHook = UseAxiosPrivate();
  const friendsList = useSelector((state: RootState) => state.friends.value);
  if (!friendsList || !friendsList.length)
    return (
      <div className={`${friends}`}>
        <p className="w-100">
          You have no friends yet !!!!
          <br />
          go to{" "}
          <Link to="/game" className="">
            dashboard
          </Link>{" "}
          to search for them
        </p>
      </div>
    );
  return (
    <div className={`${friends}`}>
      <div className="">
        {friendsList &&
          friendsList.length &&
          friendsList.map((friend, index) => (
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
                  <div className="user-level">
                    lvl. {friend.level ? friend.level : 0}
                  </div>
                </div>
              </Link>
              <div className="invite-remove-button">
                <div className="invite-button">invite</div>
                <div className="remove-button" title="unfriend">
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
                  onClick={() => blockUser(AxiosPrivateHook, friend.username!)}
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
