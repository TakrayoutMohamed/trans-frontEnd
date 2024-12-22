import { blockIcon, profileIcon } from "@/media-exporting";
import { friendRequests } from "./styles";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import UseAxiosPrivate from "@/src/services/hooks/UseAxiosPrivate";
import { RootState, store } from "@/src/states/store";
import { AxiosInstance } from "axios";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { UserDataType } from "@/src/states/authentication/userSlice";
import { MdPersonRemoveAlt1 } from "react-icons/md";
import {
  setBlockedData,
  setFriendsData,
} from "../modules/setAuthenticationData";
import { CgUnblock } from "react-icons/cg";

const blockUser = (AxiosPrivateHook: AxiosInstance, username: string): void => {
  AxiosPrivateHook.post("block_user", { username: username })
    .then((res) => {
      console.log("res : you blocked this user");
      console.log(res);
      setBlockedData([
        ...store.getState().blocked.value,
        { username: username },
      ]);
    })
    .catch((err) => {
      console.log("error in blocking a user ");
      console.log(err);
    });
};

const unblockUser = (
  AxiosPrivateHook: AxiosInstance,
  username: string
): void => {
  AxiosPrivateHook.delete("block_user", { data: { username: username } })
    .then((res) => {
      console.log("res : you unblocked this user");
      console.log(res);
      setBlockedData(
        store
          .getState()
          .blocked.value.filter((blocked) => blocked.username !== username)
      );
      // here i have to add the blocked user to the list of blocked users
    })
    .catch((err) => {
      console.log("error in blocking a user ");
      console.log(err);
    });
};

const unfriendUser = (AxiosPrivateHook: AxiosInstance, username: string) => {
  console.log("handle unfriend user  to game ");
  AxiosPrivateHook.delete("friends", { data: { username: username } })
    .then((res) => {
      console.log("res : you removed this user " + username + " from friends");
      console.log(res);
      setFriendsData(
        store
          .getState()
          .friends.value.filter((friend) => friend.username !== username)
      );
      //here i need to remove the user from the list of friends
    })
    .catch((err) => {
      console.log("error in unfriend  a user ");
      console.log(err);
    });
};

const FriendRequests = () => {
  const AxiosPrivateHook = UseAxiosPrivate();
  // const friendRequestsList = useSelector((state: RootState) => state.friends.value);
  const friendsData = useSelector((state: RootState) => state.friends.value);
  const blockedList = useSelector((state: RootState) => state.blocked.value);
  const [friendRequestsList, setFriendsList] = useState<UserDataType[]>([]);
  useEffect(() => {
    setFriendsList(friendsData);
  }, [friendsData]);
  if (!friendRequestsList || !friendRequestsList.length) {
    return (
      <div className={`${friendRequests}`}>
        <p className="no-friend-requests">
          You have no friend requests sent or recieved yet !!!!
          <br />
          go to{" "}
          <Link to="/game" className="">
            dashboard
          </Link>{" "}
          to send a friend request
        </p>
      </div>
    );
  }
  return (
    <div className={`${friendRequests}`}>
      <div className="">
        {friendRequestsList &&
          friendRequestsList.length &&
          friendRequestsList.map((friend, index) => (
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
                <div className="invite-button" onClick={() => {}}>
                  accept
                </div>
                <div
                  className="remove-button"
                  title="unfriend"
                  onClick={() =>
                    unfriendUser(AxiosPrivateHook, friend.username!)
                  }
                >
                  reject
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FriendRequests;
