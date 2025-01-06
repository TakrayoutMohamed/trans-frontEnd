import PlayerHolder from "./PlayerHolder";
const TournamentBodyLeftSide = (props: any) => {
	console.log(props.TournamentPlayers);
	
  return (
    <div className="TournamentBodyLeftSide">
      <PlayerHolder
        setStartTournment={props.setStartTournment}
        id={1}
        winner={false}
        joinable={true}
        focusedId={props.focusedId}
        setFocusedId={props.setFocusedId}
        setTournamentPlayer={props.setTournamentPlayer}
        TournamentPlayers={props.TournamentPlayers}
      />
      <PlayerHolder
      setStartTournment={props.setStartTournment}
        id={2}
        winner={false}
        joinable={true}
        focusedId={props.focusedId}
        setFocusedId={props.setFocusedId}
        setTournamentPlayer={props.setTournamentPlayer}
        TournamentPlayers={props.TournamentPlayers}
      />
    </div>
  );
};

export default TournamentBodyLeftSide;
