import { pongPlayer } from "@/media-exporting";

const PongPlayerInGame = () => {
  return (
    <>
      <div className="d-none d-sm-block col-1 m-0 p-5"></div>
      <div
        className="bg-danger-subtlee col-10 position-relative mt-5"
        style={{ height: "30vh" }}
      >
        <div
          className="bg-transparent bg-success-subtlee position-relative h-100"
          style={{ backdropFilter: "blur(6px)" }}
        >
          <div className="col-8 position-absolute z-0 bottom-0 border rounded-4 w-100 h-100 p-4 ps-5 ">
            <div className=" h3 w-75">HI USER! ENJOY YOUR TIMETIME</div>
            <div className="btn btn-info rounded-5 py-0 px-3">PLAY NOW</div>
          </div>
          <div
            className="bg-infoo col-4 position-absolute z-1 bottom-0 end-0"
            style={{ width: "49%", minWidth: "200px", maxWidth: "300px" }}
          >
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
    </>
  );
};

export default PongPlayerInGame;
