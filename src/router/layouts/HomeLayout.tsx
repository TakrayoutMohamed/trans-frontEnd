import { Outlet } from "react-router-dom";
import Navbar from "@publicComponents/Navbar";

const HomeLayout = () => {
  return (
    <>
      <div className="bg-info">HomeLayout</div>
      <header>
        <Navbar></Navbar>
      </header>
      <Outlet />
    </>
  );
};
export default HomeLayout;
