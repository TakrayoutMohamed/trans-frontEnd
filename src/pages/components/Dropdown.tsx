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
    <div className={`${className} dropdown bg-danger`}>
      <span className="" data-bs-toggle="dropdown" aria-expanded="true">
        {children}
      </span>
      <ul className="dropdown-menu bg-success-subtle border-0 p-0 m-1">
        {linksDetails && linksDetails.map((content, index) => (
          <>
            {linksDetails.length - 1 === index && <hr className="mx-2 my-0 mb-1"/>}
            <li key={index} className="dropdown-item py-2">
              {content.data}
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
