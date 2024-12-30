import { Fragment, useEffect, useRef, useState } from "react";
import { IoNotificationsSharp } from "react-icons/io5";
import { notificationsInGame } from "../../styles";
import { profileIcon } from "@/media-exporting";
import { Link } from "react-router-dom";
import { FaUserCheck } from "react-icons/fa";
import { FiUserX } from "react-icons/fi";
import UseAxiosPrivate from "@/src/services/hooks/UseAxiosPrivate";
import { AxiosInstance } from "axios";
import { UserDataType } from "@/src/states/authentication/userSlice";
import NotificationsComponent from "@/src/router/layouts/components/notifications/NotificationsComponent";

const showHideNotificationsList = (
  notificationListRef: React.MutableRefObject<any>,
  isVisible: React.Dispatch<React.SetStateAction<boolean>>
) => {
  let classNameString: string | undefined =
    notificationListRef.current.className;
  if (notificationListRef.current.className?.includes("d-none")) {
    classNameString = classNameString?.replace(" d-none", "");
  } else {
    classNameString = classNameString?.concat(" d-none");
  }
  notificationListRef.current.className = classNameString;
  isVisible((prev) => !prev);
};

const NotificationsFriendRequestCard = (data: any) => {
  return (
    <div className="message-accept-reject-buttons">
      <div className="message">here is the message here is the message here is the message</div>
      <div className="accept-reject-buttons">
        <button className="accept-button">
          <FaUserCheck />
        </button>
        <button className="reject-button">
          <FiUserX />
        </button>
      </div>
    </div>
  );
};

const NotificationsInviteCard = (data: any) => {
  return (
    <Fragment>
      <div className="message">
        here is the message of a user inviting you to a game
      </div>
    </Fragment>
  );
};

type NotificationsDataType = {
  message: string;
  receiver_notif: UserDataType;
  type: string;
}

const NotificationsInGame = () => {
  const notificationListRef = useRef(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [notificationsList, setNotificationsList] = useState<NotificationsDataType[]>([]);
  const axiosPrivateHook = UseAxiosPrivate();
  useEffect(() => {
    const getNotifications = async (axiosPrivateHook: AxiosInstance) => {
      try {
        const res = await axiosPrivateHook.get("notification/notif")
        console.log(res);
        setNotificationsList(res.data)
      } catch (err) {
        console.log("error in Notifications In game");
        console.log(err);
      }
    }
    if (isVisible)
      getNotifications(axiosPrivateHook);
  },[isVisible])
  console.log(notificationsList);
  
  return (
    <div className={notificationsInGame}>
      <div
        className="notifications-ring-number"
        onClick={() =>
          showHideNotificationsList(notificationListRef, setIsVisible)
        }
      >
        <IoNotificationsSharp color="white" size={23} />
        <span className="number-of-notifications">{8}</span>
      </div>
      <div className="notifications-list d-none" ref={notificationListRef}>
        <div className="notifications-card">
          <Link to="#" className="image">
            <img src={profileIcon} alt="user image" />
          </Link>
          <NotificationsFriendRequestCard data={""} />
        </div>
        <div className="notifications-card">
          <Link to="#" className="image">
            <img src={profileIcon} alt="user image" />
          </Link>
          <NotificationsInviteCard data={""} />
        </div>
      </div>
    </div>
  );
};

export default NotificationsInGame;
