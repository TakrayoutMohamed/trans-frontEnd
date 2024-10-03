import { Fragment } from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <Fragment>
      <div className="bg-info">DashboardLayout</div>
      <Outlet />
    </Fragment>
  );
};

export default DashboardLayout;
