import { NavLink } from "react-router-dom";
import { brandIcon, profileIcon } from "@/media-exporting.ts";
import { useSelector } from "react-redux";
import { RootState } from "@/src/states/store";
import Dropdown, { Links } from "@pages/components/Dropdown";
import ImagesIcon from "@pages/components/ImageIcon";

const dropdownLinks: Links[] = [
  {
    data: (
      <NavLink to="game" className="">
        game
      </NavLink>
    ),
  },
  {
    data: (
      <NavLink to="profile" className="">
        profile
      </NavLink>
    ),
  },
  {
    data: (
      <NavLink to="chat" className="">
        chat
      </NavLink>
    ),
  },
  {
    data: (
      <NavLink to="setting" className="">
        setting
      </NavLink>
    ),
  },
  {
    data: (
      <NavLink to="logout" className="btn btn-danger">
        logout
      </NavLink>
    ),
  },
];

const Navbar = () => {
  const isAuthenticated: boolean = useSelector(
    (state: RootState) => state.authenticator.value
  );

  return (
    <>
      <div className="container-fluid bg-secondary-subtle d-flex flex-row justify-content-between pb-0 pt-2 ">
        <div className="my-auto" style={{height:"100px"}}>
          <img
            className="img-fluid m-0 p-0"
            src={brandIcon}
            width="100%"
            height="auto"
            alt="brand"
          />
        </div>
        <div className="w-100 d-flex justify-content-xs-start justify-content-sm-evenly">
          <div className="mt-3 p-1">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </div>
          <div className="mt-3 p-1">
            <NavLink className="nav-link" to="/about-us">
              ABOUT US
            </NavLink>
          </div>
          <div className="mt-3 p-1">
            <NavLink className="nav-link" to="/team">
              TEAM
            </NavLink>
          </div>
          <div className="mt-3 p-1">
            <NavLink className="nav-link" to="/contact">
              CONTACT
            </NavLink>
          </div>
        </div>
        <div className={"mt-2 ms-auto"}>
          {!isAuthenticated && (
            <NavLink style={{width:"100px"}} className="bg-success d-inline-flex rounded-pill py-1 px-3 mt-2 me-3" to="/sign-up">
              SIGN UP
            </NavLink>
          )}
          {isAuthenticated && (
            <Dropdown
              className=" rounded-pill"
              linksDetails={dropdownLinks}
            >
              <ImagesIcon
                //this one still need to be modified to use the pic of the user
                imgPath={profileIcon}
                imgSize={{ width: "60px", height: "60px" }}
                title="profile image"
                alt="dropDown"
                styles="bg-success rounded-5"
              />
            </Dropdown>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
