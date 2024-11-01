import { goldenMedalIcon, profileIcon } from "@/media-exporting";
import { RiMenuSearchLine } from "react-icons/ri";
import { gameProfileInGame } from "../../styles";

const ProfileInGame = () => {
  return (
    <>
      <div className={`bg-successs d-flex flex-column ${gameProfileInGame}`} >
        <div className=" text-center">My Profile</div>
        <div className="row col-12 p-0 m-0 mt-2">
          <div className="bg-infoo col-6 d-flex flex-row flex-wrap p-0 m-0 ">
            <img
              src={profileIcon}
              alt="my-profile"
              width="50%"
              className="rounded-circle bg-success m-0"
              style={{maxWidth:"100%", height:"auto"}}
            />
            <div className="bg-infoo text-black d-flex flex-column m-0 p-0 my-auto ">
              <div className="bg-successs me-auto fw-semibold">Alvares</div>
              <p className="p-0 m-0">
                <RiMenuSearchLine /> level 8.57
              </p>
            </div>
          </div>
          <div className="col-1 vr p-0 m-0 border border-2"></div>
          <div className="bg-danger-subtlee col-5 d-flex p-0 mx-auto">
            <img
              src={goldenMedalIcon}
              alt="medal Icon"
              width="70%"
              className="bg-dangerr m-0 p-0 mx-auto"
              style={{maxWidth:"100%", height:"auto"}}
            />
          </div>
        </div>
        <hr className="m-2 p-0 border border-2" />
        <div className="container w-100 row m-0 p-0 mb-2 justify-content-evenly mx-auto mt-auto">
          <div className="col-3 p-0 text-center">
            <div className="text-center h6 m-0 text-nowrap">last Game</div>
            <div className="text-danger mt-auto">Lost</div>
          </div>
          <div className="vr col-1 p-0 mx-1 my-2 border border-2"></div>
          <div className="col-3 p-0 text-center">
            <div className="h6 m-0">Status</div>
            <div className="text-success mt-auto">online</div>
          </div>
          <div className="vr col-1 p-0 mx-1 my-2 border border-2"></div>
          <div className="col-4 p-0 text-center">
            <div className="text-center h6 m-0 text-nowrap">Last Score</div>
            <div className="text-success mt-auto">172.35xp</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileInGame;
