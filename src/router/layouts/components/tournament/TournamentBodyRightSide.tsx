import PlayerHolder from './PlayerHolder'

const TournamentBodyRightSide = (props) => {
	return (
		<div className="TournamentBodyRightSide">
			<PlayerHolder id={3} winner={false} joinable={true} FriendsData={props.FriendsData}/>
			<PlayerHolder id={4} winner={false} joinable={true} FriendsData={props.FriendsData}/>
		</div>
	)
}

export default TournamentBodyRightSide;
