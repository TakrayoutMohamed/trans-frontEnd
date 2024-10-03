import { NavLink } from "react-router-dom";
import {navbarBrand} from "./../../../../public/index.ts";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm">
        <div className="container-fluid">
          <img
            className="navbar-brand img-fluid nav-link"
            src={navbarBrand}
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
              <li className="nav-item  mx-5 p ">
                <NavLink
                  className="bg-success nav-link px-3 rounded-pill "
                  to="/sign-up"
                >
                  SIGN UP
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
