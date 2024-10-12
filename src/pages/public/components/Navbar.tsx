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
      <div className="container-fluid bg-secondary-subtle d-flex flex-row justify-content-between p-0">
        <div className="my-auto">
          <img
            className="img-fluid"
            src={brandIcon}
            width="50%"
            height="auto"
            alt="brand"
          />
        </div>
        <div className="me-2 w-100 d-flex justify-content-xs-start justify-content-sm-evenly">
          <div className="my-auto p-1">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </div>
          <div className="my-auto p-1">
            <NavLink className="nav-link" to="/about-us">
              ABOUT US
            </NavLink>
          </div>
          <div className="my-auto p-1">
            <NavLink className="nav-link" to="/team">
              TEAM
            </NavLink>
          </div>
          <div className="my-auto p-1">
            <NavLink className="nav-link" to="/contact">
              CONTACT
            </NavLink>
          </div>
        </div>
        <div className="my-auto me-5">
          {!isAuthenticated && (
            <NavLink className="bg-success  px-3 rounded-pill " to="/sign-up">
              SIGN UP
            </NavLink>
          )}
          {isAuthenticated && (
            <Dropdown
              className="dropstart rounded-pill mx-auto"
              linksDetails={dropdownLinks}
            >
              <ImagesIcon
                //this one still need to be modified to use the pic of the user
                imgPath={profileIcon}
                imgSize={{ width: "50px", height: "50px" }}
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
