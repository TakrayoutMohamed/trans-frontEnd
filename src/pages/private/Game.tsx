import { pongPlayer } from "@/media-exporting";
import BackgroundCircles from "@privateComponents/BackgroundCircles";

const Game = () => {
  return (
    <>
      <div className="position-relative w-100 h-100 m-0 ">
        <div
          className="position-absolute bg-transparent h-100 w-100 top-0 start-0 position-relative"
          style={{}}
        >
          <BackgroundCircles />
        </div>
        <div className="bg-secondary-subtlee position-absolute container-fluid  text-white w-100 top-0 start-0 m-0 me-5">
          <div className="bg-dangerr row m-4">
            <div
              className="bg-danger-subtlee col-12 col-sm-8 position-relative m-0 mt-5 ps-5"
              style={{ height:"10em" }}
            >
              <div className="bg-transparent bg-success-subtlee position-relative h-100" style={{backdropFilter: "blur(6px)", filter:""}}>
                <div className="col-8 position-absolute z-0 bottom-0 border rounded-4 w-100 h-100 p-4 ps-5 ">
                  <div className=" h3 w-75">HI USER! ENJOY YOUR TIMETIME</div>
                  <div className="btn btn-info rounded-5 py-0 px-3">
                    PLAY NOW
                  </div>
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
            <div
              className="bg-successs col-12 col-sm-3 ms-auto border rounded-4 "
              style={{ height: "" }}
            >
              here is the second container
            </div>
          </div>
          {/* <div className="bg-success row m-0">
						here is the second container
					</div> */}
        </div>
      </div>
    </>
  );
};

export default Game;
