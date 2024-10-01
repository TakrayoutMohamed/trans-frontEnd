import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand p-0 m-0 nav-link disabled" href="#" aria-disabled="true" >
            <img
              src="assets/images/navbar-brand.svg"
              width="auto"
              height="auto"
              alt="brand image pq"
              />
          </a>
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
          <div className="collapse navbar-collapse" id="navBarContent" >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink  className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink  className="nav-link" to="/about-us">ABOUT US</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink  className="nav-link" to="/team">TEAM</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink  className="nav-link" to="/contact">CONTACT</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink  className="nav-link btn btn-success rounded-5 px-3 py-1" to="/about-us">SIGN UP</NavLink>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
