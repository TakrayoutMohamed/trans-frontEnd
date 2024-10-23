import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@privateComponents/Sidebar";
import { dashboardLayout } from "../styles";

const DashboardLayout = () => {
  return (
    <Fragment>
      <div className={`d-flex gap-2 bg-dangers ${dashboardLayout} `} style={{height: "100%"}}>
        <Sidebar/>
        <div className="p-2 w-100 h-auto overflow-y-auto overflow-x-hidden">
          <Outlet />
        </div>
      </div>
    </Fragment>
  );
};

export default DashboardLayout;
