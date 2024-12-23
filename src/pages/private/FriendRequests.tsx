import { profileIcon } from "@/media-exporting";
import { friendRequests } from "./styles";
import { Link } from "react-router-dom";
import UseAxiosPrivate from "@/src/services/hooks/UseAxiosPrivate";
import { store } from "@/src/states/store";
import { AxiosInstance } from "axios";
import { useEffect, useState } from "react";
import { UserDataType } from "@/src/states/authentication/userSlice";
import {
  setFriendsData,
} from "../modules/setAuthenticationData";
import { acceptFriendRequest, rejectFriendRequest } from "../modules/fetchingData";



const unfriendUser = (axiosPrivateHook: AxiosInstance, username: string) => {
  console.log("handle unfriend user  to game ");
  axiosPrivateHook
    .delete("friends", { data: { username: username } })
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

type FriendRequestsType = UserDataType & { type: string };

async function fetchReceivedFriendRequests(axiosPrivateHook: AxiosInstance) {
  let receivedFriendRequests: FriendRequestsType[] | null = null;
  try {
    const res = await axiosPrivateHook.get("friend_req", {
      params: { type: "received" },
    });
    // console.log("response in fetchReceivedFriendRequests received data");
    // console.log(res);
    if (res.data.friend_requests && res.data.friend_requests.length) {
      receivedFriendRequests = res.data.friend_requests.map(
        (friendReq: FriendRequestsType) => ({
          ...friendReq,
          type: "received",
        })
      );
    }
  } catch (err) {
    console.log("error in fetchReceivedFriendRequests received");
    console.log(err);
  }
  return receivedFriendRequests;
}

async function fetchSentFriendRequests(axiosPrivateHook: AxiosInstance) {
  let sentFriendRequests: FriendRequestsType[] | null = null;
  try {
    const res = await axiosPrivateHook.get("friend_req", {
      params: { type: "send" },
    });
    console.log("response in fetchSentFriendRequests sent data");
    console.log(res);
    if (res.data.friend_requests && res.data.friend_requests.length) {
      sentFriendRequests = res.data.friend_requests.map(
        (friendReq: FriendRequestsType) => ({
          ...friendReq,
          type: "sent",
        })
      );
    }
  } catch (err) {
    console.log("error in fetchSentFriendRequests sent");
    console.log(err);
  }
  return sentFriendRequests;
}

const FriendRequests = () => {
  const axiosPrivateHook: AxiosInstance = UseAxiosPrivate();
  const [friendRequestsList, setFriendRequestsList] = useState<
    FriendRequestsType[]
  >([]);
  useEffect(() => {
    let sentFriendRequests: FriendRequestsType[] | null = null;
    let receivedFriendRequests: FriendRequestsType[] | null = null;

    const fetchFriendRequests = async () => {
      await fetchReceivedFriendRequests(axiosPrivateHook).then((data) => {
        receivedFriendRequests = data;
      });
      await fetchSentFriendRequests(axiosPrivateHook).then((data) => {
        sentFriendRequests = data;
      });
    };
    fetchFriendRequests().then(() => {
      if (sentFriendRequests !== null && receivedFriendRequests !== null) {
        setFriendRequestsList([
          ...sentFriendRequests!,
          ...receivedFriendRequests!,
        ]);
        sentFriendRequests = null;
        receivedFriendRequests = null;
      }
    });
  }, []);

  if (!friendRequestsList || !friendRequestsList.length) {
    return (
      <div className={`${friendRequests}`}>
        <p className="no-friend-requests">
          You have no friend requests sent or received yet !!!!
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
          friendRequestsList.map((request, index) => (
            <div className="friendrequests-card" key={index}>
              <Link
                to={`/profile/` + request.username}
                className="user-image-name-fullname"
              >
                <div className="user-image">
                  <div className="">
                    <img
                      src={
                        request.avatar
                          ? process.env.BACKEND_API_URL + "" + request.avatar
                          : profileIcon
                      }
                      alt=""
                      className="rounded-5 bg-info"
                    />
                  </div>
                </div>
                <div className="user-name-fullname">
                  <div className="user-fullname">
                    {request?.first_name?.length
                      ? request.first_name
                      : "?????????"}{" "}
                    {request?.last_name?.length
                      ? request.last_name
                      : "?????????"}
                  </div>
                  <div className="user-name">{request.username}</div>
                </div>
              </Link>
              <div className="accept-reject-cancel-button">
                {request.type === "received" ? (
                  <>
                    <div
                      className="accept-button"
                      title="accept friend request"
                      onClick={() => {acceptFriendRequest(axiosPrivateHook, request.username+"")}}
                    >
                      accept
                    </div>
                    <div
                      className="reject-button"
                      title="reject friend request"
                      onClick={() => {rejectFriendRequest(axiosPrivateHook, request.username+"")}}
                    >
                      reject
                    </div>
                  </>
                ) : (
                  <div
                    className="cancel-button"
                    title="cancel friend request"
                    onClick={() => {rejectFriendRequest(axiosPrivateHook, request.username+"")}}
                  >
                    cancel
                  </div>
                )}
              </div>
              <div
                className={`friend-request-type-${
                  request.type === "received" ? "received" : "sent"
                }`}
              >
                {request.type === "received" ? "received" : "sent     "}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FriendRequests;
