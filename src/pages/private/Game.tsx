import BackgroundCircles from "@/src/pages/private/components/gameComponents/BackgroundCircles";
import ProfileInGame from "@/src/pages/private/components/gameComponents/ProfileInGame";
import RecentInGame from "@/src/pages/private/components/gameComponents/RecentInGame";
import LeaderBordInGame from "@/src/pages/private/components/gameComponents/LeaderBordInGame";
import GameModeInGame from "@/src/pages/private/components/gameComponents/GameModeInGame";
import PongPlayerInGame from "./components/gameComponents/PongPlayerInGame";
import { game } from "./styles";

const Game = () => {
  return (
    <>
      <div className={`position-relative w-100 h-100 m-0 ${game}`}>
        <div
          className="position-absolute bg-transparent h-100 w-100 top-0 start-0 position-relative overflow-y-hidden"
          style={{}}
        >
          <BackgroundCircles />
        </div>
        <div className="bg-secondary-subtlee position-absolute container-fluid  text-white w-100 top-0 start-0 m-0">
          <div className="bg-danger-subtlee d-flex flex-column flex-md-row m-0 mx-5">
            <div className="bg-dangerr col-12 d-flex d-block d-md-none mb-5"></div>
            <div className="bg-dangere col-12 col-md-8 d-flex flex-row">
              <PongPlayerInGame />
            </div>
            <div
              className="bg-secondaryy col-12 col-md-4 m-0 p-0 mt-3"
              style={{ backdropFilter: "blur(4px)" }}
            >
              <ProfileInGame />
            </div>
          </div>
          <div className="bg-successs row m-0 my-3 mx-5 ">
            <div className="bg-secondaryy col-12 col-sm-8 m-0 p-0">
              <div className="bg-dangerr d-flex flex-row">
                <GameModeInGame />
              </div>
              <div className="bg-dangerr d-flex flex-row">
                <LeaderBordInGame />
              </div>
            </div>
            <div className="bg-infoo col-12 col-sm-4 m-0">
              <RecentInGame />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
