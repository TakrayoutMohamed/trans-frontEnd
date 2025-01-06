import {useState, useRef, useEffect} from 'react'
import Svg from './Svg'
import { playerPfp, invitePlayer, CancelPlayer } from '@/media-exporting'
import FriendsList from './FriendsList'

interface PlayerHolderProps{
	id: number;
	winner: boolean;
	joinable: boolean;
	focusedId?: number;
	setFocusedId?: any;
	TournamentPlayers: any;
	setTournamentPlayer: any;
	setStartTournment: any ;
}
const PlayerHolder = ({id, winner, joinable, focusedId, setFocusedId = (id:number) => (id), TournamentPlayers, setTournamentPlayer}: PlayerHolderProps) => {
	const [inviteMode, setInviteMode] = useState(false)
	const inviteButtonRef = useRef(null)
	console.log(winner)

	const handlePlayerInvite : any = () => {
		if (focusedId === 69){
			setFocusedId(0)
			setInviteMode(false)
			return;
		}
		setFocusedId(id)
		if (!inviteMode) // if no friendlist is showing, always show a new one upon userclick
			setInviteMode(true)
		else if (inviteMode && id == focusedId) // if double clicking on the current friendlist -> hide it, otherwise show the new one
			setInviteMode(false)
	}

	const handlePlayerKick : any = (id : number) => {
		let array = [];
		array[0] = TournamentPlayers[0];
		array[1] = TournamentPlayers[1];
		array[2] = TournamentPlayers[2];
		array[3] = TournamentPlayers[3];
		array[4] = TournamentPlayers[4];
		array[5] = TournamentPlayers[5];
		array[id - 1] = '';
		setTournamentPlayer(array);
	}

	let Player = TournamentPlayers[id - 1] 
	if (joinable)
	{
		if (Player == '')
			Player = `Player ${id}`
	}	
	else
		Player = `Winner ${id - 4}`

	return (
		<div className="PlayerHolder">
		{ /* TODO : add coloring to the Tournament winner */ }
			<div className="PlayerData">
				<Svg src={playerPfp} width={43}/>
				{Player}
			</div>
			<div className="InviteButton">
				{Player && id < 5 && TournamentPlayers[id - 1]  != '' && <Svg src={CancelPlayer} width={25}  handlePlayerInvite={() => (handlePlayerKick(id))}/> }
				{Player && TournamentPlayers[id - 1]  == '' && joinable && <Svg Ref={inviteButtonRef} src={invitePlayer} width={25} handlePlayerInvite={handlePlayerInvite}/> }
				{joinable && inviteMode && id == focusedId && <FriendsList TournamentPlayers={TournamentPlayers} setFocusedId={setFocusedId} focusedId={focusedId} PlayerHolderid={id} inviteButtonRef={inviteButtonRef} setTournamentPlayer={setTournamentPlayer}/>}
			</div>
		</div>
	)
}

export default PlayerHolder;
