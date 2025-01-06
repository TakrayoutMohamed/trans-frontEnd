import { useEffect, useState , useRef } from "react";

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
		props.setStartButtonState(newState)
	}
	
	const [moveForward, set_moveForward] = useState(0);
	let Time_number : any = useRef(null);

	 useEffect(() => {
		 if (props.StartButtonState != 2){
			 set_moveForward(0)
			 return
			}
			Time_number.current = setTimeout(() => {
				if (moveForward >= 100) {
					clearTimeout(Time_number.current);
					Time_number.current = null;
					return;
				  }
				  set_moveForward((moveForward) => moveForward + 25);
			}, 1000)
			return () => {
				clearTimeout(Time_number.current);
	};
	 }, [moveForward, props.StartButtonState])
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
			<>
					<button className="StartButton" style={{backgroundColor: background_color, pointerEvents: my_pointer_events}} onClick={() => {handleTournamentStateChange(1)}}>
						<span className="StartButtonText" style={{color: "white", backgroundColor: background_color}}>CANCEL</span>
						<div  className="timer_all">
							<div style={{width : moveForward + '%'}} className="timer_geton"></div>
						</div>
					</button>
			</>
			}
		</div>
	)
}

export default StartButton;