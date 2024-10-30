import { goldenMedalIcon, profileIcon } from "@/media-exporting";
import { RiMenuSearchLine } from "react-icons/ri";

const ProfileInGame = () => {
  return (
    <>
      <div className="h6 text-center">My Profile</div>
      <div className="row col-12 p-0 m-0 mt-2">
        <div className="bg-infoo col-6 d-flex flex-row p-0 m-0 ">
          <img
            src={profileIcon}
            alt="my-profile"
            width="50em"
            height="50em"
            className="rounded-circle bg-success p-0 m-0"
          />
          <div className="d-flex flex-column m-0 ms-1 p-0">
            <div className="bg-successs me-auto fw-semibold">Alvares</div>
            <p className="p-0 m-0">
              <RiMenuSearchLine /> level 8.57
            </p>
          </div>
        </div>
        <div className="col-1 vr p-0 m-1 border border-2"></div>
        <div className="bg-dangerr col-5 d-flex">
          <img
            src={goldenMedalIcon}
            alt="medal Icon"
            width="70em"
            className="m-0 p-0 m-auto"
          />
        </div>
      </div>
      <hr className="m-2 my-4 p-0 border border-2" />
      <div className="row mb-2 justify-content-evenly">
        <div className="col-3 p-0 text-center">
          <div className="text-center h6 row m-0">last Game</div>
          <div className="text-danger pt-3">Lost</div>
        </div>
        <div className="vr col-1 p-0 mx-1 my-2 border border-2"></div>
        <div className="col-4 p-0 text-center">
          <div className="h6 m-0">Status</div>
          <div className="text-success pt-3">online</div>
        </div>
        <div className="vr col-1 p-0 mx-1 my-2 border border-2"></div>
        <div className="col-3 p-0 text-center">
          <div className="text-center h6 row m-0">Last Score</div>
          <div className="text-success pt-3">172.35 xp</div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default ProfileInGame;
