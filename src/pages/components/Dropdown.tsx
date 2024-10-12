import { NavLink } from "react-router-dom";

export interface Links {
  to: string;
  className: string;
  linkText: string;
}

type DropdownProps = {
  className: string;
  linksDetails: Links[];
  Header: React.FC;
};

const Dropdown = ({className, linksDetails, Header }: DropdownProps) => {
  return (
    <div className={`${className} dropdown`}>
      <Header />
      <ul className="dropdown-menu">
        {linksDetails.map((data, index) => (
          <li key={index}>
            <NavLink to={data.to} className={`${data.className} dropdown-item`}>
              {data.linkText}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
