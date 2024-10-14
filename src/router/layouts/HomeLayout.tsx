import { Outlet } from "react-router-dom";
import Navbar from "@publicComponents/Navbar";
import styles from "@router/styles/HomeLayout.module.css";

const HomeLayout = () => {
  return (
    <>
      <div className={"bg-danger " + styles['homeLayout']}>
        <header>
          <Navbar></Navbar>
        </header>
        <Outlet />
      </div>
    </>
  );
};
export default HomeLayout;
