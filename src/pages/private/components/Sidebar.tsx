import { NavLink } from "react-router-dom";
import {
  brandIcon,
  chatIcon,
  gameIcon,
  homeIcon,
  profileIcon,
  settingsIcon,
  tournamentIcon,
} from "@/media-exporting";
import ImagesIcon from "@pages/components/ImageIcon";

const styleSidebar = {
  background: "linear-gradient(#03062E 0%, #5F0A94 45.71%)",
  width: "100px",
  minWidth: "40px",
  maxWidth: "100px",
};

const Sidebar = () => {
  return (
    <>
      <div
        className=" h-auto d-flex flex-column justify-content-between text-center  border border-2 rounded-end-4 rounded-bottom-0 overflow-y-auto backgroundActive"
        style={styleSidebar}
      >
        <ImagesIcon
          imgPath={brandIcon}
          imgSize={{ width: "50px", height: "50px" }}
          styles="w-auto mt-4"
          title="brandLogo"
          alt="brandIcon"
        />
        <NavLink to={"/"} className="my-auto ">
          <ImagesIcon
            imgPath={homeIcon}
            imgSize={{ width: "35px", height: "35px" }}
            title="Home"
            alt="homeIcon"
          />
        </NavLink>
        <NavLink to={"/profile"} className="my-auto">
          <ImagesIcon
            imgPath={profileIcon}
            imgSize={{ width: "35px", height: "35px" }}
            title="Profile"
            alt="profileIcon"
          />
        </NavLink>
        <NavLink to={"/game"} className="my-auto">
          <ImagesIcon
            imgPath={gameIcon}
            imgSize={{ width: "35px", height: "35px" }}
            title="Game"
            alt="gameIcon"
          />
        </NavLink>
        <NavLink to={"/chat"} className="my-auto">
          <ImagesIcon
            imgPath={chatIcon}
            imgSize={{ width: "35px", height: "35px" }}
            title="Chat"
            alt="chatIcon"
          />
        </NavLink>
        <NavLink to={"/tournament"} className="my-auto">
          <ImagesIcon
            imgPath={tournamentIcon}
            imgSize={{ width: "35px", height: "35px" }}
            title="tournament"
            alt="tournament icon"
          />
        </NavLink>
        <NavLink to={"/setting"} className="my-auto mb-5">
          <ImagesIcon
            imgPath={settingsIcon}
            imgSize={{ width: "35px", height: "35px" }}
            title="Setting"
            alt="settingIcon"
          />
        </NavLink>
      </div>
    </>
  );
};

export default Sidebar;
