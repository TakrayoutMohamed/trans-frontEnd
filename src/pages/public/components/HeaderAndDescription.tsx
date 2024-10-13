interface HeaderProps {
  children:string[];
  className: string;
}

interface DescriptionProps {
  className: string;
  children: string[];
}

export type Props = {
  header: {
    className:string;
    content:string;
  },
  description: {
    className:string;
    content:string;
  };
};

export const Heading = ( {className , children} : HeaderProps) => {
  return <div className={className}>{children}</div>;
};
export const Description = ({ className, children }: DescriptionProps) => {
  return <div className={className}>{children}</div>;
};

const HeaderAndDescription = ({ header, description }: Props) => {
  return (
    <>
      <Heading className={header.className}> {header.content} </Heading>
      <Description className={description.className}> {description.content} </Description>
    </>
  );
};

export default HeaderAndDescription;
