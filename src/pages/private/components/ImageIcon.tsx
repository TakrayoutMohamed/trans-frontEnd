interface ImageProps {
  alt?: string;
  styles?: string;
  title?: string;
  imgPath: string;
  imgSize: {
    width: string;
    height: string;
  };
}

const ImagesIcon = ({
  imgPath,
  imgSize,
  alt = "the image of a sidebar icon",
  styles = "mx-auto w-auto",
  title = "",
}: ImageProps) => {
  return (
    <img
      src={imgPath}
      width={imgSize.width}
      height={imgSize.height}
      alt={alt}
      title={title}
      className={styles}
    />
  );
};

export default ImagesIcon;