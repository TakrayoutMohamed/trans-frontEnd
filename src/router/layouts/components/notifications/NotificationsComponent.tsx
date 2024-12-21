import { notificationsComponent } from "@/src/router/styles";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

interface NotificationsComponentProps{
  message: string;
  reject: () => void;
  accept: () => void;
}

const NotificationsComponent = ({message, reject, accept} : NotificationsComponentProps) => {
  return (
    <>
      <div className={notificationsComponent}>
        <div className="notification-message">{message}</div>
        <div className="notification-reject-accept">
          <div className="notification-reject" onClick={reject}><ImCross color="red"/></div>
          <div className="notification-accept" onClick={accept}><FaCheck color="greenyellow"/></div>
        </div>
      </div>
    </>
  );
};

export default NotificationsComponent;
