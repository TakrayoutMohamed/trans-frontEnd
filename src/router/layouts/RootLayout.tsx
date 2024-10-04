import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <div className="bg-danger"></div>
      <Outlet />
    </>
  );
};
export default RootLayout;
