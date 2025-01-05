import PlayerHolder from './PlayerHolder'

const TournamentBodyRightSide = (props) => {
	return (
		<div className="TournamentBodyRightSide">
			<PlayerHolder id={3} winner={false} joinable={true} FriendsData={props.FriendsData} focusedId={props.focusedId} setFocusedId={props.setFocusedId} Player={props.TournamentPlayers[2]} socket={props.socket} />
			<PlayerHolder id={4} winner={false} joinable={true} FriendsData={props.FriendsData} focusedId={props.focusedId} setFocusedId={props.setFocusedId} Player={props.TournamentPlayers[3]} socket={props.socket} />
		</div>
	)
}

export default TournamentBodyRightSide;
