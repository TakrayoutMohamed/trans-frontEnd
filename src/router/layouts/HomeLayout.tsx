import { Outlet } from "react-router-dom";
import Navbar from "@publicComponents/Navbar";
import { homeLayout } from "../styles";

const HomeLayout = () => {
  return (
    <>
      <div className={`bg-dangerr d-flex ${homeLayout} `}>
        <div className="col-0 col-lg-2 col-xl-2"></div>
        <div className={`shadow-lg col-12 col-lg-8 col-xl-8  ${homeLayout} `}>
          <header>
            <Navbar></Navbar>
          </header>
          <Outlet />
        </div>
        <div className="col-0 col-lg-2 col-xl-2"></div>
      </div>
    </>
  );
};
export default HomeLayout;
