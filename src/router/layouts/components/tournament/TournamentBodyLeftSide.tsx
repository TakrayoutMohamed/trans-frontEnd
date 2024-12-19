import PlayerHolder from './PlayerHolder'


const TournamentBodyLeftSide = (props) => {
	return (
		<div className="TournamentBodyLeftSide">
			<PlayerHolder id={1} winner={false} joinable={true} FriendsData={props.FriendsData} focusedId={props.focusedId} handleCLick={props.handleCLick}/>
			<PlayerHolder id={2} winner={false} joinable={true} FriendsData={props.FriendsData} focusedId={props.focusedId} handleCLick={props.handleCLick}/>
		</div>
	)
}

export default TournamentBodyLeftSide;
