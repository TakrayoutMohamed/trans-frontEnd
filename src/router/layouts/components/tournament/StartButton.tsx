
const StartButton = (props: any) => {

	let background_color = "#B30783"
	let StartButtonText = "START"
	if (!props.activated){
		background_color = "#656565"
		StartButtonText = "CANCEL"
	}
		


	return (
		<div className='StartTournament'>
			<button className="StartButton" style={{backgroundColor: background_color}}>
				{!props.activated && <span className="StartButtonText">{StartButtonText}</span> }
				{props.activated && <span className="StartButtonText" style={{color: "white", backgroundColor: background_color}}>{StartButtonText}</span> }
			</button>
		</div>
	)
}

export default StartButton;