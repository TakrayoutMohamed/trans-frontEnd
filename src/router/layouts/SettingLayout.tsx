import { NavLink, Outlet } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { settingLayout } from "../styles";
import { profileIcon, settingBackgroundImage } from "@/media-exporting";
import { BiSearch } from "react-icons/bi";

const SettingLayout = () => {
  return (
    <Fragment>
      <div className={settingLayout + " p-2"}>
        <div className="input-field">
          <BiSearch />
          <input type="text" name="search" id="searchSettings" />
        </div>
        <section className="sectionOfSetting">
          <div className="user-background-image">
            <div className="background-img">
              <img src={settingBackgroundImage} alt="" />
            </div>
            <div className="user-image">
              <img src={profileIcon} alt="image of user" className="" />
            </div>
          </div>
          <div className="setting-routes-outlets">
            <div className="setting-routes">
              <NavLink to={"details"} className="">
                Details
              </NavLink>
              <NavLink to={"profile"} className="">
                Profile
              </NavLink>
              <NavLink to={"password"} className="">
                Password
              </NavLink>
            </div>
            <div className="setting-outlets">
              <Outlet />
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default SettingLayout;
