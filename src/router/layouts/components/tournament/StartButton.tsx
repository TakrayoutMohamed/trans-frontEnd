
const StartButton = (props: any) => {

	let background_color = "#B30783"
	
	let my_pointer_events: "none" | "auto" = "auto";
	let StartButtonText = "START"
	if (!props.StartButtonState){
		background_color = "#656565"
		my_pointer_events = "none"
	}
	if (props.StartButtonState == 2){
		StartButtonText = "CANCEL"
	}
		
	const handleTournamentStateChange = (newState: number) => {
		console.log("changing state to ", newState)
		props.setStartButtonState(newState)
	}

	return (
		<div className='StartTournament'>
			{props.StartButtonState == 0 &&
			<button className="StartButton" style={{backgroundColor: background_color, pointerEvents: my_pointer_events}}>
				{props.StartButtonState == 0 && <span className="StartButtonText">START</span> }
			</button>
			}
			{props.StartButtonState == 1 &&
			<button className="StartButton" style={{backgroundColor: background_color, pointerEvents: my_pointer_events}} onClick={() => {handleTournamentStateChange(2)}}>
				{props.StartButtonState == 1 && <span className="StartButtonText" style={{color: "white", backgroundColor: background_color}}>START</span> }
			</button>
			}
			{props.StartButtonState == 2 && 
			<button className="StartButton" style={{backgroundColor: background_color, pointerEvents: my_pointer_events}} onClick={() => {handleTournamentStateChange(1)}}>
				<span className="StartButtonText" style={{color: "white", backgroundColor: background_color}}>CANCEL</span>
			</button>
			}
		</div>
	)
}

export default StartButton;