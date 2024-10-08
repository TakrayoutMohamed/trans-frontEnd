import { NavLink } from "react-router-dom";

interface Props {
  linkTo?: string;
  className?: string;
}

const Dropdown = () => {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Dropdown
      </a>
      <ul className="dropdown-menu">
        <li>
          <NavLink to="game" className="dropdown-item">
              game
          </NavLink>
        </li>
        <li>
          <NavLink to="profile" className="dropdown-item">
              profile
          </NavLink>
        </li>
        <li>
          <NavLink to="chat" className="dropdown-item">
              chat
          </NavLink>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            logOut
          </a>
        </li>
      </ul>
    </li>
  );
};

export default Dropdown;
