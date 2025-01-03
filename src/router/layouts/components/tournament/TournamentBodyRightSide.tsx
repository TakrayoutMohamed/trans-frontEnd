import PlayerHolder from './PlayerHolder'

const TournamentBodyRightSide = (props) => {
	return (
		<div className="TournamentBodyRightSide">
			<PlayerHolder id={3} winner={false} joinable={true} FriendsData={props.FriendsData} focusedId={props.focusedId} setFocusedId={props.setFocusedId} Player={props.TournamentPlayers[2]}/>
			<PlayerHolder id={4} winner={false} joinable={true} FriendsData={props.FriendsData} focusedId={props.focusedId} setFocusedId={props.setFocusedId} Player={props.TournamentPlayers[3]}/>
		</div>
	)
}

export default TournamentBodyRightSide;
