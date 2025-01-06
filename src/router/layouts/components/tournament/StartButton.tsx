
const StartButton = (activated : any) => {
	return (
		<div className='StartTournament'>
			<button className="StartButton">
				{!activated && <span className="StartButtonText">START</span> }
				{activated && <span className="StartButtonText" style={{color: "white", backgroundColor: "#b30683"}}>START</span> }
			</button>
		</div>
	)
}

export default StartButton;