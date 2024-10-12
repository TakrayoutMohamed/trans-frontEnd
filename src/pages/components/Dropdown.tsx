export interface Links {
  data:React.ReactNode; 
}

type DropdownProps = {
  className: string;
  linksDetails: Links[];
  children: React.ReactElement
};

const Dropdown = ({className, linksDetails, children }: DropdownProps) => {
  return (
    <div className={`${className} dropdown`}>
      <span className="" data-bs-toggle="dropdown" aria-expanded="false">
        {children}
      </span>
      <ul className="dropdown-menu mx-auto">
        {linksDetails.map((content, index) => (
          <li key={index} className="dropdown-item">
            {content.data}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
