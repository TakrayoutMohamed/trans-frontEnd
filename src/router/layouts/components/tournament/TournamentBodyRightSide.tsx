import PlayerHolder from "./PlayerHolder";

const TournamentBodyRightSide = (props : any) => {
  return (
    <div className="TournamentBodyRightSide">
      <PlayerHolder
        id={3}
        winner={false}
        joinable={true}
        FriendsData={props.FriendsData}
        focusedId={props.focusedId}
        setFocusedId={props.setFocusedId}
        socket={props.socket}
        setTournamentPlayer={props.setTournamentPlayer}
        TournamentPlayers={props.TournamentPlayers}
        setStartTournment={props.setStartTournment}
      />
      <PlayerHolder
		    setStartTournment={props.setStartTournment}
        id={4}
        winner={false}
        joinable={true}
        FriendsData={props.FriendsData}
        focusedId={props.focusedId}
        setFocusedId={props.setFocusedId}
        setTournamentPlayer={props.setTournamentPlayer}
        TournamentPlayers={props.TournamentPlayers}
        socket={props.socket}
      />
    </div>
  );
};

export default TournamentBodyRightSide;
