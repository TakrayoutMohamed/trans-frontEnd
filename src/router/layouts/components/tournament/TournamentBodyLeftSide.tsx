import PlayerHolder from './PlayerHolder'

const TournamentBodyLeftSide = ({FriendsData} : {FriendsData:any}) => {
	return (
		<div className="TournamentBodyLeftSide">
			<PlayerHolder id={1} winner={false} joinable={true} FriendsData={FriendsData}/>
			<PlayerHolder id={2} winner={false} joinable={true} FriendsData={FriendsData}/>
		</div>
	)
}

export default TournamentBodyLeftSide;
