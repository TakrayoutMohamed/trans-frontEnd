import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@privateComponents/Sidebar";

const DashboardLayout = () => {
  return (
    <Fragment>
      <div className="d-flex gap-2 bg-danger" style={{height: "100%"}}>
        <Sidebar/>
        <div className="p-2 w-100 h-auto overflow-y-auto">
          outlet of the sidebar<br/>
          <Outlet />
        </div>
      </div>
    </Fragment>
  );
};

export default DashboardLayout;
