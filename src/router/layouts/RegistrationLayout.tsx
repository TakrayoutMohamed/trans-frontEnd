import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { registrationLayout ,registrationLayoutStick, registrationLayoutSignUpIn } from "@router/styles";
import { ballIcon } from "@/media-exporting";
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";

const RegistrationLayout = () => {
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const sign = (pathname === "/sign-in" ? "UP" : "IN");
  const isSignIn : string = pathname === "/sign-in" ? "flex-row-reverse" : "";
  const startAnimation = () : void => {
    const switching = document.querySelector(".signInUp");
    if (pathname === "/sign-in")
    {
      switching?.classList?.remove("flex-row-reverse");
      navigate("/sign-up");
      
    }
    if (pathname === "/sign-up")
    {
      switching?.classList.add("flex-row-reverse");
      navigate("/sign-in");
    }
  }
  return (
    <Fragment>
      <div className={"bg-info d-flex "+ registrationLayout}>
        <div className="bg-success-subtle container row m-auto p-0" style={{height:"40em"}}>
          <div className={`bg-success col-12 col-sm-11 col-md-10 col-lg-9 d-flex signInUp mx-0 ${isSignIn } `} >
            <div className="bg-danger-subtle w-100 ">
              <Outlet />
            </div>
            <div className={`border d-flex my-auto mx-3 p-1  ${registrationLayoutSignUpIn}`} >
              <p className="bg-dangerr text-center h4 m-auto" onClick={() => startAnimation()}>
                  SIGN
                  {
                    pathname === "/sign-in"
                    ? <BiSolidLeftArrow className="m-0 me-1 my-4" size="1em"/>
                    : <BiSolidRightArrow className="m-0 me-1 my-4" size="1em"/>
                  }
                  {sign}
              </p>
              </div>
            <div className={` bg-primary-subtlee my-auto ${registrationLayoutStick} `} ></div>
          </div>
          <div className="bg-danger d-none d-sm-block col-sm-1 col-md-2 col-lg-3 p-0 pt-5 my-auto mx-0" >
            <img src={ballIcon} alt="the ball icon" width="80em" className="bg-danger-subtle float-end img-fluid m-0 mt-5" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RegistrationLayout;
