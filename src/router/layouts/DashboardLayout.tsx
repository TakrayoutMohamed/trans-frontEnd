import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../pages/private/components/Sidebar";

const DashboardLayout = () => {
  return (
    <Fragment>
      <div className="d-flex gap-2 position-relative" style={{height: "100%"}}>
        <Sidebar/>
        <div className="p-2 w-100">
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          outlet of the sidebar<br/>
          <Outlet />
        </div>
      </div>
    </Fragment>
  );
};

export default DashboardLayout;
