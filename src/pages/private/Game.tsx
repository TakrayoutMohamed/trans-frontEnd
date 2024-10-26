import { goldenMedalIcon, pongPlayer, profileIcon } from "@/media-exporting";
import BackgroundCircles from "@privateComponents/BackgroundCircles";
import { RiMenuSearchLine } from "react-icons/ri";

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
          <div className="bg-dangerr row m-4 mx-0">
            <div className="col-none col-sm-1 m-0 p-0"></div>
            <div
              className="bg-danger-subtlee col-12 col-sm-7 position-relative mt-5"
              style={{ minHeight: "12em" }}
            >
              <div
                className="bg-transparent bg-success-subtlee position-relative h-100"
                style={{ backdropFilter: "blur(6px)" }}
              >
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
              className="bg-secondary bg-opacity-10 col-12 col-sm-4 ms-auto border mt-3 rounded-4"
              style={{ backdropFilter: "blur(4px)" }}
            >
              <div className="h6 text-center">My Profile</div>
              <div className="row col-12 p-0 m-0 mt-2">
                <div className="bg-infoo col-6 d-flex flex-row p-0 m-0 ">
                  <img
                    src={profileIcon}
                    alt="my-profile"
                    width="50em"
                    height="50em"
                    className="rounded-circle bg-success p-0 m-0"
                  />
                  <div className="d-flex flex-column m-0 ms-1 p-0">
                    <div className="bg-successs me-auto fw-semibold">
                      Alvares
                    </div>
                    <p className="p-0 m-0">
                      <RiMenuSearchLine /> level 8.57
                    </p>
                  </div>
                </div>
                <div className="col-1 vr p-0 m-1 border border-2"></div>
                <div className="bg-dangerr col-5 d-flex">
                  <img
                    src={goldenMedalIcon}
                    alt="medal Icon"
                    width="70em"
                    className="m-0 p-0 m-auto"
                  />
                </div>
              </div>
              <hr className="m-2 my-4 p-0 border border-2" />
              <div className="row mb-2 justify-content-evenly">
                <div className="col-3 p-0 text-center">
                  <div className="text-center h6 row m-0">last Game</div>
                  <div className="text-danger pt-3">Lost</div>
                </div>
                <div className="vr col-1 p-0 mx-1 my-2 border border-2"></div>
                <div className="col-4 p-0">
                  <div className="text-center h6 row m-0">Status</div>
                  <div className="text-success pt-3">online</div>
                </div>
                <div className="vr col-1 p-0 mx-1 my-2 border border-2"></div>
                <div className="col-3 p-0 text-center">
                  <div className="text-center h6 row m-0">Last Score</div>
                  <div className="text-success pt-3">172.35 xp</div>
                </div>
              </div>
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
