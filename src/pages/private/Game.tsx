import BackgroundCircles from "@privateComponents/BackgroundCircles";

const Game = () => {
  return (
    <>
      <div className="position-relative w-100 h-100">
        <div
          className="position-absolute bg-transparent h-100 w-100 top-0 start-0 position-relative"
          style={{}}
        >
          <BackgroundCircles />
        </div>
        <div className="position-absolute container-fluid bg-secondary-subtlee text-white w-100 h-50 top-0 start-0">
          <div className="bg-danger row m-0 mt-3">
            here is the first container
          </div>
          <div className="bg-success row m-0">
            here is the second container
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
