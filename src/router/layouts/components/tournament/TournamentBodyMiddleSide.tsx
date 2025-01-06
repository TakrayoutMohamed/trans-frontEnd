import PlayerHolder from "./PlayerHolder";
import MiddleLeftLines from "./MiddleLeftLines";
import MiddleRightLines from "./MiddleRightLines";

const TournamentBodyMiddleSide = (props: any) => {
  return (
    <div className="TournamentBodyMiddleSide">
      <MiddleLeftLines />

      {/* TODO : might refractor this to an own component*/}
      <div className="PlayerHolders">
        <PlayerHolder
		  setStartTournment={props.setStartTournment}
          joinable={false}
          id={5}
          winner={false}
          setTournamentPlayer={props.setTournamentPlayer}
          TournamentPlayers={props.TournamentPlayers}
          FriendsData={props.FriendsData}
          focusedId={props.focusedId}
          setFocusedId={props.setFocusedId}
          socket={props.socket}
        />
        <PlayerHolder
		  setStartTournment={props.setStartTournment}
          joinable={false}
          id={6}
          winner={false}
          setTournamentPlayer={props.setTournamentPlayer}
          TournamentPlayers={props.TournamentPlayers}
          FriendsData={props.FriendsData}
          focusedId={props.focusedId}
          setFocusedId={props.setFocusedId}
          socket={props.socket}
        />
      </div>

      <MiddleRightLines />
    </div>
  );
};

export default TournamentBodyMiddleSide;