import { Outlet } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { registrationLayout ,registrationLayoutStick, registrationLayoutSignUpIn } from "@router/styles";
import { ballIcon } from "@/media-exporting";
import { BiSolidRightArrow } from "react-icons/bi";

const RegistrationLayout = () => {
  return (
    <Fragment>
      <div className={"bg-info d-flex "+ registrationLayout}>
        <div className="bg-success-subtle container row m-auto" style={{height:"40em"}}>
          <div className="bg-success col-9 d-flex mx-0" >
            <div className="bg-danger-subtle w-100">
              <Outlet />
            </div>
            <div className={`border border-2 d-flex my-auto mx-3 p-1  ${registrationLayoutSignUpIn}`} >
              <p className="bg-dangerr text-center h4 m-auto">
                SIGN <BiSolidRightArrow className="m-0 me-1" size="1em"/> IN
              </p>
            </div>
            <div className={` bg-primary-subtlee my-auto ${registrationLayoutStick} `} ></div>
          </div>
          <div className="bg-danger-subtle col-2 d-flex ms-auto" >
            <img src={ballIcon} alt="the ball icon" width="80em" className="ms-auto" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RegistrationLayout;
