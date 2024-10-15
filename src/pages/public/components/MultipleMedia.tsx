interface MediaProps {
  children?:  string[] | React.ReactNode;
  className: string;
}

const MultipleMedia = ({ children, className="" }: MediaProps) => {
  if (!children) return <div>No media to show</div>;
  return <div className={className}>{children}</div>;
};

export default MultipleMedia;
