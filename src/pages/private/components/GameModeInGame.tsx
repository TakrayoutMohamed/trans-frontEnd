import { gameModeInGame } from "../styles";

const GameModeInGame = () => {
  return (
    <>
      <div className={`bg-dangerr d-flex justify-content-center w-100 ${gameModeInGame}`}>
        <div className="bg-info m-1">div1</div>
        <div className="bg-info m-1">div2</div>
        <div className="bg-info m-1">div3</div>
        <div className="bg-info m-1">div4</div>
        <div className="bg-info m-1">div5</div>
      </div>
    </>
  );
};

export default GameModeInGame;
