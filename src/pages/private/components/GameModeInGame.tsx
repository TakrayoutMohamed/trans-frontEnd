import { gameModeInGame } from "../styles";

const changeToRight = () => {
  const nodes = document.querySelectorAll(".slides");
  const parent = document.querySelector(`.${gameModeInGame}`);
  console.log(nodes);

  // parent?.insertBefore(nodes[0], nodes[1]);
  // parent?.insertBefore(nodes[1], nodes[2]);
  parent?.insertBefore(nodes[2], nodes[0]);

}
const changeToLeft = () => {
  const nodes = document.querySelectorAll(".slides");
  const parent = document.querySelector(`.${gameModeInGame}`);
  console.log(nodes);

  // parent?.insertBefore(nodes[1], nodes[0]);
  parent?.insertBefore(nodes[0], nodes[2]);
  parent?.insertBefore(nodes[2], nodes[0]);

}

const GameModeInGame = () => {
  return (
    <>
      <div className={`bg-danger-subtle d-flex justify-content-between mx-2 w-100 ${gameModeInGame}`}>
        <div className="bg-info m-1 my-auto" onClick={async () => changeToLeft()}>div1</div>
        <div className="bg-info m-1 my-auto slides">div2</div>
        <div className="bg-info m-1 my-auto slides">div3d iv3div 3div3div 3div3di v3div3div3div3div3</div>
        <div className="bg-info m-1 my-auto slides">div4</div>
        <div className="bg-info m-1 my-auto" onClick={async () => changeToRight()}>div5</div>
      </div>
    </>
  );
};

export default GameModeInGame;
