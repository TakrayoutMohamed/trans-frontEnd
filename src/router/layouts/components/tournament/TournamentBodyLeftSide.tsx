import PlayerHolder from './PlayerHolder'
// import { memo } from "react"
const TournamentBodyLeftSide = (props) => {
	return (
		<div className="TournamentBodyLeftSide">
			<PlayerHolder id={1} winner={false} joinable={true} FriendsData={props.FriendsData} focusedId={props.focusedId} setFocusedId={props.setFocusedId} Player={props.TournamentPlayers[0]} socket={props.socket}/>
			<PlayerHolder id={2} winner={false} joinable={true} FriendsData={props.FriendsData} focusedId={props.focusedId} setFocusedId={props.setFocusedId} Player={props.TournamentPlayers[1]} socket={props.socket}/>
		</div>
	)
}

export default (TournamentBodyLeftSide);
