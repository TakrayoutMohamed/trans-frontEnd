import PlayerHolder from "./PlayerHolder";
// import { memo } from "react"
const TournamentBodyLeftSide = (props: any) => {
	console.log(props.TournamentPlayers);
	
  return (
    <div className="TournamentBodyLeftSide">
      <PlayerHolder
        setStartTournment={props.setStartTournment}
        id={1}
        winner={false}
        joinable={true}
        FriendsData={props.FriendsData}
        focusedId={props.focusedId}
        setFocusedId={props.setFocusedId}
        setTournamentPlayer={props.setTournamentPlayer}
        TournamentPlayers={props.TournamentPlayers}
        socket={props.socket}
      />
      <PlayerHolder
      setStartTournment={props.setStartTournment}
        id={2}
        winner={false}
        joinable={true}
        FriendsData={props.FriendsData}
        focusedId={props.focusedId}
        setFocusedId={props.setFocusedId}
        socket={props.socket}
        setTournamentPlayer={props.setTournamentPlayer}
        TournamentPlayers={props.TournamentPlayers}
      />
    </div>
  );
};

export default TournamentBodyLeftSide;
