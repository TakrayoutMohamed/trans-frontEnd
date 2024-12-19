import PlayerHolder from './PlayerHolder'

const TournamentBodyRightSide = (props) => {
	return (
		<div className="TournamentBodyRightSide">
			<PlayerHolder id={3} winner={false} joinable={true} FriendsData={props.FriendsData} focusedId={props.focusedId} handleCLick={props.setFocusedId}/>
			<PlayerHolder id={4} winner={false} joinable={true} FriendsData={props.FriendsData} focusedId={props.focusedId} handleCLick={props.setFocusedId}/>
		</div>
	)
}

export default TournamentBodyRightSide;
