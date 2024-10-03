import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <div className="bg-danger">RootLayout</div>
      <Outlet />
    </>
  );
};
export default RootLayout;
