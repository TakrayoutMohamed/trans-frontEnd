import { pongPlayer } from "@/media-exporting";
import { pongPlayerInGame } from "../styles";

const PongPlayerInGame = () => {
  return (
    <>
      <div
        className={`row w-100 m-0 p-0  mt-auto ${pongPlayerInGame}`}
      >
        <div className="d-none d-md-block col-2 h-100 m-0 p-0"></div>
        <div className="col-12 col-md-10 d-flex position-relative bottom-0 m-0">
          <div
            className="col-12 col-md-12 position-relative z-0 d-flex flex-column mt-auto "
            id="PongPlayerText"
          >
            <div className="w-50 h-50 row m-0 p-0 ps-4 my-auto">
              <div className="col-12 col-sm-6  p-0 m-0">HI USER!</div>
              <div className="col-6 text-nowrap p-0 m-0">
                ENJOY YOUR TIME
              </div>
              <button className="btn bg-info-subtle rounded-4 col-auto text-nowrap m-0">
                PLAY NOW
              </button>
            </div>
            <div className="col-4 position-absolute z-n1 bottom-0 end-0">
              <img
                src={pongPlayer}
                alt="pong player"
                width="100%"
                className="bg-info-subtlee"
                style={{}}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PongPlayerInGame;
