import { useRef } from "react";
import { IoNotificationsSharp } from "react-icons/io5";
import { notificationsInGame } from "../../styles";

const showHideNotificationsList = (
  notificationListRef: React.MutableRefObject<any>
) => {
  let classNameString: string | undefined =
    notificationListRef.current.className;

  if (notificationListRef.current.className?.includes("d-none")) {
    classNameString = classNameString?.replace(" d-none", "");
  } else {
    classNameString = classNameString?.concat(" d-none")
}
notificationListRef.current.className = classNameString;
};

const NotificationsInGame = () => {
  const notificationListRef = useRef(null);
  return (
    <div className={notificationsInGame}>
      <div
        className="notifications-ring-number"
        onClick={() => showHideNotificationsList(notificationListRef)}
      >
        <IoNotificationsSharp color="white" size={23} />
        <span className="number-of-notifications">{8}</span>
      </div>
      <div className="notifications-list" ref={notificationListRef}>
        <div className="list">heloooooooooooooooooow</div>
        <div className="list">helooooooooooooooooooww</div>
        <div className="list">heloooooooooooooooooot</div>
        <div className="list">heloooooooooooooooooowqqq</div>
        <div className="list">heloooooooooooooooooohhh</div>
      </div>
    </div>
  );
};

export default NotificationsInGame;
