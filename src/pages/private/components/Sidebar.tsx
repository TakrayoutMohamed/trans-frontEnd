import { NavLink } from "react-router-dom";
import {
  brandIcon,
  chatIcon,
  gameIcon,
  homeIcon,
  profileIcon,
  settingsIcon,
} from "../../../../media-exporting";

const styleSidebar = {
  background: "linear-gradient(#03062E 0%, #5F0A94 45.71%)",
  width: "100px",
  minWidth: "20px",
  maxWidth: "100px",
};

interface ImageProps {
  alt?: string;
  styles?: string;
  title?: string;
  imgPath: string;
  imgSize: {
    width: string,
    height: string,
  };
}

const ImagesIcon = ({
  imgPath,
  imgSize,
  alt = "the image of a sidebar icon",
  styles = "mx-auto w-auto",
  title="",
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

const Sidebar = () => {
  return (
    <>
      <div
        className=" h-auto d-flex flex-column justify-content-between text-center  border border-2 rounded-end-4 rounded-bottom-0 sticky-top"
        style={styleSidebar}
      >
        <ImagesIcon
          imgPath={brandIcon}
          imgSize={{ width: "50px", height: "50px" }}
          styles="w-auto mt-4"
          title="pingpong logo"
        />
        <NavLink to={"/"} className="my-auto">
          <ImagesIcon
            imgPath={homeIcon}
            imgSize={{ width: "35px", height: "35px" }}
            title="Home"
          />
        </NavLink>
        <NavLink to={"/profile"} className="my-auto my-auto">
          <ImagesIcon
            imgPath={profileIcon}
            imgSize={{ width: "35px", height: "35px" }}
            title="Profile"
          />
        </NavLink>
        <NavLink to={"/game"} className="my-auto">
          <ImagesIcon
            imgPath={gameIcon}
            imgSize={{ width: "35px", height: "35px" }}
            title="Game"
          />
        </NavLink>
        <NavLink to={"/chat"} className="my-auto">
          <ImagesIcon
            imgPath={chatIcon}
            imgSize={{ width: "35px", height: "35px" }}
            title="Chat"
          />
        </NavLink>
        <NavLink to={"/setting"} className=" my-auto">
          <ImagesIcon
            imgPath={settingsIcon}
            imgSize={{ width: "35px", height: "35px" }}
            title="Setting"
          />
        </NavLink>
      </div>
    </>
  );
};

export default Sidebar;
