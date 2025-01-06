
const StartButton = (activated : any) => {
	return (
		<div className='StartTournament'>
			<button className="StartButton">
				{!activated && <span className="StartButtonText">START</span> }
				{activated && <span style={{color: "white", backgroundColor: "#b30683"}} className="StartButtonText" >START</span> }
			</button>
		</div>
	)
}

export default StartButton;