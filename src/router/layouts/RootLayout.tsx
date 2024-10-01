import { Outlet } from "react-router-dom";
import Navbar from "../../pages/public/components/Navbar";

const RootLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet/>
    </>
  );
};
export default RootLayout;
