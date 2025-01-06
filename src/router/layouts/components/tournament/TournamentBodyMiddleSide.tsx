import PlayerHolder from "./PlayerHolder";
import MiddleLeftLines from "./MiddleLeftLines";
import MiddleRightLines from "./MiddleRightLines";

const TournamentBodyMiddleSide = (props: any) => {
  return (
    <div className="TournamentBodyMiddleSide">
      <MiddleLeftLines />
      <div className="PlayerHolders">
        <PlayerHolder
		  setStartTournment={props.setStartTournment}
          joinable={false}
          id={5}
          winner={false}
          setTournamentPlayer={props.setTournamentPlayer}
          TournamentPlayers={props.TournamentPlayers}
          focusedId={props.focusedId}
          setFocusedId={props.setFocusedId}
        />
        <PlayerHolder
		  setStartTournment={props.setStartTournment}
          joinable={false}
          id={6}
          winner={false}
          setTournamentPlayer={props.setTournamentPlayer}
          TournamentPlayers={props.TournamentPlayers}
          focusedId={props.focusedId}
          setFocusedId={props.setFocusedId}
        />
      </div>

      <MiddleRightLines />
    </div>
  );
};

export default TournamentBodyMiddleSide;