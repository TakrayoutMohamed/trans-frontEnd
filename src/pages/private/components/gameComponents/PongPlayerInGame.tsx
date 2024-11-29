import { pongPlayer } from "@/media-exporting";
import { pongPlayerInGame } from "../../styles";

const PongPlayerInGame = () => {
  return (
    <>
      <div className={pongPlayerInGame}>
        <div className="pong-player-text-vector">
          <div className="user-welcoming-play-button">
            <div className="user-welcoming">
              <span className="">HI USER!</span>
              ENJOY YOUR TIME
            </div>
            <button className="play-button">PLAY NOW</button>
          </div>
          <div className="pong-player-vector">
            <img src={pongPlayer} alt="pong player" className="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PongPlayerInGame;
