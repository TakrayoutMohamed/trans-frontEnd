import PlayerHolder from './PlayerHolder'

const TournamentBodyLeftSide = () => {
	return (
		<div className="TournamentBodyLeftSide">
			<PlayerHolder id={1} winner={false} joinable={true} />
			<PlayerHolder id={2} winner={false} joinable={true} />
		</div>
	)
}

export default TournamentBodyLeftSide;
