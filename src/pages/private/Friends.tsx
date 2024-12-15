import { blockIcon, profileIcon } from "@/media-exporting";
import { friends } from "./styles";
import { TfiTrash } from "react-icons/tfi";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import UseAxiosPrivate from "@/src/services/hooks/UseAxiosPrivate";
import { RootState } from "@/src/states/store";
import { AxiosInstance } from "axios";
import { useSelector } from "react-redux";

const blockUser = (AxiosPrivateHook: AxiosInstance, username: string): void => {
  AxiosPrivateHook.post("block_user", { username: username })
    .then((res) => {
      console.log("res : you blocked this user");
      console.log(res);
      // here i have to add the blocked user to the list of blocked users
    })
    .catch((err) => {
      console.log("error in blocking a user ");
      console.log(err);
    });
};

const inviteToGame = (AxiosPrivateHook: AxiosInstance, username: string) => {
  console.log("handle invite to game ");
};
const unfriendUser = (AxiosPrivateHook: AxiosInstance, username: string) => {
  console.log("handle unfriend user  to game ");
  AxiosPrivateHook.delete("friend_req", { data: { username: username } })
    .then((res) => {
      console.log("res : you removed this user " + username + " from friends");
      console.log(res);
      //here i need to remove the user from the list of friends
    })
    .catch((err) => {
      console.log("error in unfriend  a user ");
      console.log(err);
    });
};

const Friends = () => {
  const AxiosPrivateHook = UseAxiosPrivate();
  const friendsList = useSelector((state: RootState) => state.friends.value);
  if (!friendsList || !friendsList.length)
    return (
      <div className={`${friends}`}>
        <p className="no-friends">
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
                      src={
                        friend.avatar
                          ? process.env.BACKEND_API_URL + "" + friend.avatar
                          : profileIcon
                      }
                      alt=""
                      className="rounded-5 bg-info"
                    />
                  </div>
                </div>
                <div className="user-name-level">
                  <div className="user-name">
                    {friend?.first_name?.length
                      ? friend.first_name
                      : "?????????"}{" "}
                    {friend?.last_name?.length ? friend.last_name : "?????????"}
                  </div>
                  <div className="user-level">
                    lvl. {friend.level ? friend.level : 0}
                  </div>
                </div>
              </Link>
              <div className="invite-remove-button">
                <div
                  className="invite-button"
                  onClick={() =>
                    inviteToGame(AxiosPrivateHook, friend.username!)
                  }
                >
                  invite
                </div>
                <div
                  className="remove-button"
                  title="unfriend"
                  onClick={() =>
                    unfriendUser(AxiosPrivateHook, friend.username!)
                  }
                >
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
