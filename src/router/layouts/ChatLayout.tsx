import { Outlet } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { chatLayout } from "../styles";

const ChatLayout = () => {
  return (
    <Fragment>
      <div className={`${chatLayout}`}>
        <div className="bg-danger d-none d-md-block p-5"></div>
        <div className="" id="main">
          chat Layout
          <Outlet/>
        </div>
      </div>
    </Fragment>
  );
};

export default ChatLayout;
