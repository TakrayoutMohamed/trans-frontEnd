import { profileIcon } from "@/media-exporting";
import { friendRequests } from "./styles";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  acceptFriendRequest,
  getAllFriendRequests,
  rejectFriendRequest,
} from "../modules/fetchingData";
import { useSelector } from "react-redux";
import { RootState } from "@/src/states/store";
import { FriendRequestsType } from "@/src/customDataTypes/FriendsRequestsType";

const FriendRequests = () => {
  const allUsersData = useSelector((state: RootState) => state.allUsers.value)
  const [friendRequestsList, setFriendRequestsList] = useState<
    FriendRequestsType[]
  >([]);
  useEffect(() => {
    getAllFriendRequests().then((data) => {
      if (data)
        setFriendRequestsList(data);
    });
  }, [allUsersData]);

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
                      onClick={() => {
                        acceptFriendRequest(
                          request.username + "",
                          setFriendRequestsList,
                          friendRequestsList
                        );
                      }}
                    >
                      accept
                    </div>
                    <div
                      className="reject-button"
                      title="reject friend request"
                      onClick={() => {
                        rejectFriendRequest(
                          request.username + "",
                          setFriendRequestsList
                        );
                      }}
                    >
                      reject
                    </div>
                  </>
                ) : (
                  <div
                    className="cancel-button"
                    title="cancel friend request"
                    onClick={() => {
                      rejectFriendRequest(
                        request.username + "",
                        setFriendRequestsList
                      );
                    }}
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
