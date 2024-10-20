interface HeaderProps {
  children:string[] | undefined | any;
  className: string;
}

interface DescriptionProps {
  children: string[] | undefined | any;
  className: string;
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
  return <h1 className={className}>{children}</h1>;
};
export const Description = ({ className, children }: DescriptionProps) => {
  return <p className={className}>{children}</p>;
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
