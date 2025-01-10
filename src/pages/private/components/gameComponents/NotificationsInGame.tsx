import { Fragment, useEffect, useRef, useState } from "react";
import { IoNotificationsSharp } from "react-icons/io5";
import { notificationsInGame } from "../../styles";
import { profileIcon } from "@/media-exporting";
import { Link } from "react-router-dom";
import { FaUserCheck } from "react-icons/fa";
import { FiUserX } from "react-icons/fi";
import {
  acceptFriendRequest,
  rejectFriendRequest,
} from "@/src/pages/modules/fetchingData";
import { UserDataType } from "@/src/customDataTypes/UserDataType";
import { axiosPrivate } from "@/src/services/api/axios";
import { NotificationsDataType } from "@/src/customDataTypes/NotificationsDataType";

type NotificationsCardsProps = {
  message: string;
  sender_notif?: UserDataType;
};

const NotificationsFriendRequestCard = ({
  message,
  sender_notif,
}: NotificationsCardsProps) => {
  return (
    <div className="message-accept-reject-buttons">
      <div className="message">{message}</div>
      <div className="accept-reject-buttons">
        <button
          className="accept-button"
          onClick={() => {
            acceptFriendRequest(sender_notif?.username!);
          }}
        >
          <FaUserCheck />
        </button>
        <button
          className="reject-button"
          onClick={() => {
            rejectFriendRequest(sender_notif?.username!);
          }}
        >
          <FiUserX />
        </button>
      </div>
    </div>
  );
};

const NotificationsInviteCard = ({ message }: NotificationsCardsProps) => {
  return (
    <Fragment>
      <div className="message">{message}</div>
    </Fragment>
  );
};

let isbillRingFocused: boolean = false;
let isNotificationsDevFocused: boolean = false;

const hideNotificationsList = (
  notificationListRef: React.MutableRefObject<any>,
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
) => {
  let classNameString: string | undefined =
    notificationListRef.current.className;
    if (isbillRingFocused === false && isNotificationsDevFocused === false){
      if (!notificationListRef.current.className?.includes("d-none")) {
        classNameString = classNameString?.concat(" d-none");
        notificationListRef.current.className = classNameString;
        setIsVisible(false);
      }
    }
};
const showNotificationsList = (
  notificationListRef: React.MutableRefObject<any>,
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
) => {
  let classNameString: string | undefined =
    notificationListRef.current.className;
  if (notificationListRef.current.className?.includes("d-none")) {
    classNameString = classNameString?.replace(" d-none", "");
    notificationListRef.current.className = classNameString;
    setIsVisible(true);
  }
};

const NotificationsInGame = () => {
  const notificationListRef = useRef(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [notificationsList, setNotificationsList] = useState<
    NotificationsDataType[]
  >([]);
  useEffect(() => {
    const getNotifications = async () => {
      try {
        const res = await axiosPrivate.get("notification/notif");
        console.log(res);
        setNotificationsList(res.data.results);
      } catch (err) {
        console.log("error in Notifications In game");
        console.log(err);
      }
    };
    if (isVisible) getNotifications();
    return () => {
      isbillRingFocused = false;
      isNotificationsDevFocused = false;
    }
  }, [isVisible]);

  return (
    <div className={notificationsInGame}>
      <div
        tabIndex={0}
        className="notifications-ring-number"
        onFocus={() => {
          isbillRingFocused = true;
          showNotificationsList(notificationListRef, setIsVisible);
        }}
        onBlur={() => {
          isbillRingFocused = false;
          hideNotificationsList(notificationListRef, setIsVisible);
        }}
      >
        <IoNotificationsSharp color="white" size={23} />
        <span className="number-of-notifications">
          {notificationsList && notificationsList.length
            ? notificationsList.length
            : ""}
        </span>
      </div>
      <div
        className="notifications-list d-none"
        tabIndex={0}
        onMouseEnter={() => (isNotificationsDevFocused = true)}
        onMouseLeave={() => (isNotificationsDevFocused = false)}
        onFocus={() => showNotificationsList(notificationListRef, setIsVisible)}
        onBlur={() => {
          isNotificationsDevFocused = false;
          hideNotificationsList(notificationListRef, setIsVisible);
        }}
        ref={notificationListRef}
      >
        {notificationsList && notificationsList.length ? (
          notificationsList.map((notification) => {
            return (
              <div
                className="notifications-card"
                key={notification.sender_notif.username}
              >
                <Link to={`/profile/${notification.sender_notif.username}`} className="image">
                  <img
                    src={
                      notification.sender_notif.avatar
                        ? process.env.BACKEND_API_URL +
                          notification.sender_notif.avatar
                        : profileIcon
                    }
                    alt="user image"
                  />
                </Link>
                {notification.type === "friend_request" ? (
                  <NotificationsFriendRequestCard
                    message={notification.message}
                    sender_notif={notification.sender_notif}
                  />
                ) : (
                  <NotificationsInviteCard
                    message={notification.message}
                    sender_notif={notification.sender_notif}
                  />
                )}
              </div>
            );
          })
        ) : (
          <div className="notifications-card text-danger">
            no notifications to show
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationsInGame;
