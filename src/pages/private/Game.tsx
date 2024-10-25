import { pongPlayer, profileIcon } from "@/media-exporting";
import BackgroundCircles from "@privateComponents/BackgroundCircles";
import ImagesIcon from "../components/ImageIcon";
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
              className="bg-successs col-12 col-sm-3 ms-auto border rounded-4 text-center"
              style={{ height: "" }}
            >
              <div className="h6  p-0 m-0">My Profile</div>
							<div className="d-flex flex-row p-0 m-0">
								<div className="d-flex flex-row p-0 m-0">
									<img src={profileIcon} alt="my-profile" width="40" className="rounded-5 bg-success p-0 m-0" />
									<div className="d-flex flex-column">
										<h6 className="p-0 ps-1 m-0">Alvares</h6>
										<p className=" p-0 ps-1 m-0"> <RiMenuSearchLine />level </p>
									</div>
									<div className="vh"></div>
								</div>
							</div>
							<hr className="m-5  p-0 m-0" />
							<div className="d-flex flex-row">
								<div className="text-center">1</div>
								<div className="text-center">2</div>
								<div className="text-center">3</div>
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
