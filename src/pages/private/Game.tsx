import BackgroundCircles from "@privateComponents/BackgroundCircles";
import ProfileInGame from "@privateComponents/ProfileInGame";
import RecentInGame from "@privateComponents/RecentInGame";
import LeaderBordInGame from "@privateComponents/LeaderBordInGame";
import GameModeInGame from "@privateComponents/GameModeInGame";
import PongPlayerInGame from "./components/PongPlayerInGame";

const Game = () => {
  return (
    <>
      <div className="position-relative w-100 h-100 m-0 ">
        <div
          className="position-absolute bg-transparent h-100 w-100 top-0 start-0 position-relative overflow-y-hidden"
          style={{}}
        >
          <BackgroundCircles />
        </div>
        <div className="bg-secondary-subtlee position-absolute container-fluid  text-white w-100 top-0 start-0 m-0 me-5">
          <div className="bg-danger-subtle d-flex flex-column flex-sm-row m-0">
            <div className="bg-danger col-12 col-sm-8 d-flex flex-row">
              <PongPlayerInGame />
            </div>
            <div
              className="bg-secondary col-12 col-sm-4 m-0 p-0 border mt-3 rounded-4"
              style={{ backdropFilter: "blur(4px)" }}
            >
              <ProfileInGame />
            </div>
          </div>
          <div className="bg-successs row m-0">
            <div className="bg-secondaryy col-12 col-sm-8 m-0 p-0">
              <div className="bg-dangerr d-flex flex-row">
                <GameModeInGame />
              </div>
              <div className="bg-dangerr d-flex flex-row">
                <LeaderBordInGame />
              </div>
            </div>
            <div className="bg-info col-12 col-sm-4 m-0">
              <RecentInGame />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
