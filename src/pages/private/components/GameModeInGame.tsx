import { friends, robot, tournament } from "@/media-exporting";
import { gameModeInGame } from "../styles";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const changeToRight = () => {
  const nodes = document.querySelectorAll(".slides");
  const parent = document.querySelector(`.${gameModeInGame}`);
  console.log(nodes);

  // parent?.insertBefore(nodes[0], nodes[1]);
  // parent?.insertBefore(nodes[1], nodes[2]);
  parent?.insertBefore(nodes[2], nodes[0]);
};
const changeToLeft = () => {
  const nodes = document.querySelectorAll(".slides");
  const parent = document.querySelector(`.${gameModeInGame}`);
  console.log(nodes);

  // parent?.insertBefore(nodes[1], nodes[0]);
  parent?.insertBefore(nodes[0], nodes[2]);
  parent?.insertBefore(nodes[2], nodes[0]);
};

const GameModeInGame = () => {
  return (
    <>
      <div
        className={`d-flex justify-content-between mx-2 w-100 ${gameModeInGame}`}
      >
        <div
          className="m-1 my-auto ms-4"
          onClick={async () => changeToLeft()}
        >
          <FaChevronLeft size={50} />
        </div>
        <div className="position-relative m-1 my-auto slides d-flex ">
          <div className="h-100 position-absolute z-2 d-flex flex-column p-2">
            <div className="m-0 p-0 ">TOURNAMENT</div>
            <div className="m-0 p-0 ">the tournament challenge</div>
            <button className="bg-success btn btn-dark w-75 m-0 p-0 ">
              PLAY NOW
            </button>
          </div>
          <img
            src={tournament}
            alt="tournament images"
            height="90%"
            className="float-end p-0 m-0 my-auto ms-auto"
            />
        </div>
        <div className="position-relative m-1 my-auto slides d-flex ">
          <div className="h-100 position-absolute z-2 d-flex flex-column p-2">
            <div className="m-0 p-0 ">AI MODE</div>
            <div className="m-0 p-0 ">the challenge computer</div>
            <button className="bg-success btn btn-dark w-75 m-0 p-0 ">
              PLAY NOW
            </button>
          </div>
          <img
            src={robot}
            alt="robot images"
            height="90%"
            className="float-end p-0 m-0 my-auto ms-auto"
            />
        </div>
        <div className="position-relative m-1 my-auto slides d-flex ">
          <div className="h-100 position-absolute z-2 d-flex flex-column p-2">
            <div className="m-0 p-0 ">FRIENDS</div>
            <div className="m-0 p-0 ">the friends challenge</div>
            <button className="bg-success btn btn-dark w-75 m-0 p-0 ">
              PLAY NOW
            </button>
          </div>
          <img
            src={friends}
            alt="friends images"
            height="70%"
            className="float-end p-0 m-0 my-auto ms-auto"
            />
        </div>
        <div
          className="m-1 my-auto"
          onClick={async () => changeToRight()}
        >
          <FaChevronRight size={50}/>
        </div>
      </div>
    </>
  );
};

export default GameModeInGame;
