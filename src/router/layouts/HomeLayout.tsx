import { Outlet } from "react-router-dom";
import Navbar from "@publicComponents/Navbar";
import styles from "@router/styles/HomeLayout.module.css";

const HomeLayout = () => {
  return (
    <>
      <div className={"bg-dangerr d-flex  " + styles['homeLayout']}>
        <div className="col-md-0 col-lg-2 col-xl-2"></div>
        <div className={"shadow-lg col-md-12 col-lg-8 col-xl-8 " + styles['homeLayout']}>
          <header>
            <Navbar></Navbar>
          </header>
          <Outlet />
        </div>
        <div className="col-md-0 col-lg-2 col-xl-2"></div>
      </div>
    </>
  );
};
export default HomeLayout;
