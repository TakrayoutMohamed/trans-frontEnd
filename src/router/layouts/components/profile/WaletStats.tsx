import { coinsBackground, profileIcon } from "@/media-exporting";
import { profileWaletStats } from "@/src/router/styles";
import { LiaCoinsSolid } from "react-icons/lia";
import { RiCoinsLine } from "react-icons/ri";

const data = { first_name: "alvares", last_name: "negredo", level: "12.55" };

const WaletStats = () => {
  return (
    <>
      <div className={`${profileWaletStats}`}>
        <div className="user-image-name-level">
          <div className="user-image">
            <div className="">
              <img src={profileIcon} alt="" className="rounded-5 bg-info" />
            </div>
          </div>
          <div className="user-name-level">
            <div className="user-name">
              {data.first_name + " " + data.last_name}
            </div>
            <div className="user-level"> lvl. {data.level}</div>
          </div>
        </div>
        <div className="walet-cents-coins">
          <img src={coinsBackground} alt="" className="" />
          <div className="walet-cents">
            <LiaCoinsSolid size={25} /> 255458961456
          </div>
          <div className="walet-coins">
            <RiCoinsLine size={25} color="" style={{ marginRight: "2px" }} />
            251
          </div>
        </div>
      </div>
    </>
  );
};

export default WaletStats;
