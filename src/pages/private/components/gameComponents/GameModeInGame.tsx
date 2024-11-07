import { friends, robot, tournament } from "@/media-exporting";
import { gameModeInGame, gameModeInGameSlides } from "../../styles";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const changeToRight = () => {
  const nodes = document.querySelectorAll(`.${gameModeInGameSlides}>div`);
  const parent = document.querySelector(`.${gameModeInGameSlides}`);
  console.log(nodes);
  parent?.insertBefore(nodes[2], nodes[0]);
};
const changeToLeft = () => {
  const nodes = document.querySelectorAll(".slides");
  const parent = document.querySelector(`.${gameModeInGameSlides}`);
  console.log(nodes);
  parent?.insertBefore(nodes[0], nodes[2]);
  parent?.insertBefore(nodes[2], nodes[0]);
};

const GameModeInGame = () => {
  return (
    <>
      <div
        className={`position-relative ${gameModeInGame}`}
      >
        <div
          className="m-1 my-auto"
          onClick={async () => changeToLeft()}
        >
          <FaChevronLeft size={"2em"} />
        </div>
        <div className={`${gameModeInGameSlides} flex-column flex-sm-row gap-2`}>
          <div className=" m-1 my-auto slides d-flex mx-auto" id="slideTournament">
            <div className="d-flex flex-column p-2 my-auto">
              <h3 className="m-0 p-0 ">TOURNAMENT</h3>
              <p className="m-0 p-0 ">the tournament challenge</p>
              <button className="bg-success btn btn-dark m-0 p-0 ">
                PLAY NOW
              </button>
            </div>
            <div className="bg-successs ms-auto my-auto d-none d-sm-block">
              <img
                src={tournament}
                alt="tournament image"
                className="z-0 p-1"
                />
            </div>
          </div>
          <div className="m-1 my-auto slides d-flex mx-auto" id="slideAiMode">
            <div className="d-flex flex-column p-2  my-auto">
              <h3 className="m-0 p-0 ">AI MODE</h3>
              <p className="m-0 p-0">the challenge computer</p>
              <button className="bg-success btn btn-dark m-0 p-0 ">
                PLAY NOW
              </button>
            </div>
            <div className="bg-successs ms-auto my-auto d-none d-sm-block">
              <img
                src={robot}
                alt="robot image"
                className="z-0 p-1"
                />
            </div>
          </div>
          <div className="m-1 my-auto slides d-flex m-auto" id="slideFriends">
            <div className="d-flex flex-column p-2  my-auto">
              <h3 className="m-0 p-0 ">FRIENDS</h3>
              <p className="m-0 p-0 ">the friends challenge</p>
              <button className="bg-success btn btn-dark m-0 p-0 ">
                PLAY NOW
              </button>
            </div>
            <div className="bg-successs ms-auto my-auto d-none d-sm-block">
              <img
                src={friends}
                alt="friends images"
                className="z-0 p-1"
                />
            </div>
          </div>
        </div>
        <div
          className="my-auto"
          onClick={async () => changeToRight()}
        >
          <FaChevronRight size={"2em"}/>
        </div>
      </div>
    </>
  );
};

export default GameModeInGame;
