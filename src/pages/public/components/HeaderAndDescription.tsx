interface HeaderProps {
  children:string[] | undefined | any;
  className: string;
  style:{};
}

interface DescriptionProps {
  children: string[] | undefined | any;
  className: string;
}

export type Props = {
  header: {
    className:string;
    content:string;
    style:string;

  },
  description: {
    className:string;
    content:string;
  };
};

export const Heading = ( {className , children, style} : HeaderProps) => {
  return <h1 className={className} style={style}>{children}</h1>;
};
export const Description = ({ className, children }: DescriptionProps) => {
  return <div className={className}>{children}</div>;
};

const HeaderAndDescription = ({ header, description }: Props) => {
  return (
    <>
      <Heading className={header.className} style={header.style}> {header.content} </Heading>
      <Description className={description.className}> {description.content} </Description>
    </>
  );
};

export default HeaderAndDescription;
