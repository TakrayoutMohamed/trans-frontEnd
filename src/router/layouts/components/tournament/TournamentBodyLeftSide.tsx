import PlayerHolder from './PlayerHolder'



const TournamentBodyLeftSide = (props) => {
	return (
		<div className="TournamentBodyLeftSide">
			<PlayerHolder id={1} winner={false} joinable={true} FriendsData={props.FriendsData}/>
			<PlayerHolder id={2} winner={false} joinable={true} FriendsData={props.FriendsData}/>
		</div>
	)
}

export default TournamentBodyLeftSide;
