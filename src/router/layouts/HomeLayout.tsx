import { Outlet } from "react-router-dom";
import Navbar from "../../pages/public/components/Navbar";

const HomeLayout = () => {
  return (
    <>
      <div className="bg-info">HomeLayout</div>
      <Navbar></Navbar>
      <Outlet />
    </>
  );
};
export default HomeLayout;
