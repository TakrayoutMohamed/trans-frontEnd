import TournamentBodyLeftSide from './TournamentBodyLeftSide'
import TournamentBodyMiddleSide from './TournamentBodyMiddleSide'
import TournamentBodyRightSide from './TournamentBodyRightSide'

const TournamentBody = () => {
	return (
		<div className='TournamentBody'>
			<TournamentBodyLeftSide />
			<TournamentBodyMiddleSide />
			<TournamentBodyRightSide />
		</div>
	)
}

export default TournamentBody;
