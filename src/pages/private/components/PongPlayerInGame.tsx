import { pongPlayer } from "@/media-exporting";
import { pongPlayerInGame } from "../styles";

const PongPlayerInGame = () => {
  return (
    <>
      <div
        className={`bg-success-subtlee row w-100 m-0 p-0  ${pongPlayerInGame}`}
      >
        <div className="bg-info-subtlee d-none d-md-block col-2 h-100 m-0 p-0"></div>
        <div className="col-12 col-md-10 d-flex position-relative bottom-0 m-0">
          <div
            className="bg-secondaryy d-flex col-12 position-relative z-0  mt-auto "
            id="PongPlayerText"
          >
            <div className="bg-successs d-flex flex-row flex-wrap ps-4 " style={{}}>
              <div className="col-12 col-sm-4  p-0 m-0 mt-auto">HI USER!</div>
              <div className="col-12 col-sm-8 text-nowrap p-0 m-0 mt-auto">
                ENJOY YOUR TIME
              </div>
              <button className="btn bg-info-subtle rounded-4 col-auto text-nowrap m-0 mt-auto">
                PLAY NOW
              </button>
            </div>
            <div className="col-5 position-absolute z-n1 bottom-0 end-0">
              <img
                src={pongPlayer}
                alt="pong player"
                width="100%"
                className="bg-info-subtlee"
                style={{maxWidth:"100%", height:"auto"}}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PongPlayerInGame;
