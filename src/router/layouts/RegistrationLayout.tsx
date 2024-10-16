import { Outlet } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { registrationLayout } from "../styles";
import { ballIcon } from "@/media-exporting";

const RegistrationLayout = () => {
  return (
    <Fragment>
      <div className={"bg-info-subtle container "+ registrationLayout}>
        ads
        <div className="bg-success-subtle col row m-0">
          <div className="bg-success col-8 row mx-0">
            <div className=" bg-primary-subtle" style={{width:"30em"}}>cont stick</div>
            <div className="border border-2">sign-(in-up)</div>
            <Outlet />
          </div>
          <div className="bg-danger-subtle col-4 d-flex">
            <img src={ballIcon} alt="" width="40em" className="mx-auto" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RegistrationLayout;
