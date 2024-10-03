import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <div className="bg-info">RootLayout</div>
      <Outlet/>
    </>
  );
};
export default RootLayout;
