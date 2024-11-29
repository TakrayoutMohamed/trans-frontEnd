import { goldenMedalIcon, profileIcon } from "@/media-exporting";
import { RiMenuSearchLine } from "react-icons/ri";
import { gameProfileInGame } from "../../styles";

const ProfileInGame = () => {
  return (
    <>
      <div className={gameProfileInGame}>
        <div className="profile-title">My Profile</div>
        <div className="medal-user">
          <div className="user-image-name-level">
            <div className="user-image">
              <img src={profileIcon} alt="my-profile" className="" />
            </div>
            <div className="user-name-level">
              <div className="user-name">Alvares</div>
              <p className="user-level">
                <RiMenuSearchLine /> level 8.57
              </p>
            </div>
          </div>
          <div className="vertical-line"></div>
          <div className="medal-image">
            <img src={goldenMedalIcon} alt="medal Icon" className="" />
          </div>
        </div>
        <hr className="horizontal-line" />
        <div className="last-game-status-last-score">
          <div className="last-game">
            <div className="title">last Game</div>
            <div className="text-danger content">Lost</div>
          </div>
          <div className=" vertical-line"></div>
          <div className="status">
            <div className="title">Status</div>
            <div className="text-success content">online</div>
          </div>
          <div className="vertical-line"></div>
          <div className="last-score">
            <div className="title">Last Score</div>
            <div className="text-success content">172.35xp</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileInGame;
