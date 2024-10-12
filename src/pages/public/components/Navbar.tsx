import { NavLink } from "react-router-dom";
import { brandIcon } from "@/media-exporting.ts";
import { useSelector } from "react-redux";
import { RootState } from "@/src/states/store";
import Dropdown, { Links } from "@pages/components/Dropdown";

const dropdownLinks : Links[] = [
  {
    to : "game",
    className: "",
    linkText: "game"
  },
  {
    to : "profile",
    className: "",
    linkText: "profile"
  },
  {
    to : "logout",
    className: "btn btn-danger",
    linkText: "logout"
  },
]



const Header: React.FC = () =>  {
  return <p className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"> Dropdown </p>;
}

const Navbar = () => {
  const isAuthenticated: boolean = useSelector(
    (state: RootState) => state.authenticator.value
  );

  return (
    <>
      <nav className="navbar navbar-expand-sm">
        <div className="container-fluid">
          <img
            className="navbar-brand img-fluid nav-link"
            src={brandIcon}
            width="8%"
            height="auto"
            alt="brand image pq"
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navBarContent"
            aria-controls="navBarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navBarContent">
            <ul className="navbar-nav w-100 grid justify-content-center">
              <li className="nav-item mx-auto">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-auto">
                <NavLink className="nav-link" to="/about-us">
                  ABOUT US
                </NavLink>
              </li>
              <li className="nav-item mx-auto">
                <NavLink className="nav-link" to="/team">
                  TEAM
                </NavLink>
              </li>
              <li className="nav-item mx-auto">
                <NavLink className="nav-link" to="/contact">
                  CONTACT
                </NavLink>
              </li>
                {!isAuthenticated && (
              <li className="nav-item  mx-5 p ">
                  <NavLink
                    className="bg-success nav-link px-3 rounded-pill "
                    to="/sign-up"
                  >
                    SIGN UP
                  </NavLink>
              </li>
                )}
                {isAuthenticated && <Dropdown className="nav-item" linksDetails={dropdownLinks} Header={Header}/>}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
