import PlayerHolder from './PlayerHolder'

const TournamentBodyRightSide = () => {
	return (
		<div className="TournamentBodyRightSide">
			<PlayerHolder id={3} winner={false} joinable={true} />
			<PlayerHolder id={3} winner={false} joinable={true} />
		</div>
	)
}

export default TournamentBodyRightSide;
