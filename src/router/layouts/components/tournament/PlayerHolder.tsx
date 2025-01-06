import {useState, useRef, useEffect} from 'react'
import { w3cwebsocket } from "websocket";
import Svg from './Svg'
import { playerPfp, invitePlayer, CancelPlayer } from '@/media-exporting'
import FriendsList from './FriendsList'
import { UserDataType } from '@/src/customDataTypes/UserDataType';

interface PlayerHolderProps{
	id: number;
	winner: boolean;
	joinable: boolean;
	FriendsData?: UserDataType[];
	focusedId?: number;
	setFocusedId?: any; // TODO : ask alvares what to do here!!!
	socket: w3cwebsocket;
	TournamentPlayers: any;
	setTournamentPlayer: any;
	setStartTournment: any ;
}
// let text = "Player"
const PlayerHolder = ({id, winner, joinable, FriendsData = undefined, focusedId, setFocusedId = (id:number) => (id), socket, TournamentPlayers, setTournamentPlayer}: PlayerHolderProps) => {
	const [inviteMode, setInviteMode] = useState(false)
	const inviteButtonRef = useRef(null)
	// let Player = TournamentPlayers[id - 1]
	// useEffect(() => {
	// 	console.log( "player : "+Player+ " joinable: "+ joinable)
	// 	if (joinable)
	// 		text = Player
	// },[Player, joinable])
	console.log(winner)
	console.log('id -> ', id);

	const handlePlayerInvite : any = () => {
		console.log(id)
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

	console.log('id -> ', id )
	console.log("TournamentPlayers -> ", TournamentPlayers )

	let Player = TournamentPlayers[id - 1] 
	if (Player == '') Player = `Player ${id}`

	return (
		<div className="PlayerHolder">
		{ /* TODO : add coloring to the Tournament winner */ }
			<div className="PlayerData">
				<Svg src={playerPfp} width={43}/>
				{joinable ? Player : "Player"}
			</div>
			<div className="InviteButton">
				
				{Player && id < 5 && TournamentPlayers[id - 1]  != '' && <Svg src={CancelPlayer} width={25}  handlePlayerInvite={() => (handlePlayerKick(id))}/> }
				{Player && TournamentPlayers[id - 1]  == '' && joinable && <Svg Ref={inviteButtonRef} src={invitePlayer} width={25} handlePlayerInvite={handlePlayerInvite}/> }
				{joinable && inviteMode && id == focusedId && <FriendsList TournamentPlayers={TournamentPlayers} FriendsData={FriendsData} setFocusedId={setFocusedId} focusedId={focusedId} PlayerHolderid={id} inviteButtonRef={inviteButtonRef} socket={socket} setTournamentPlayer={setTournamentPlayer}/>}
			</div>
		</div>
	)
}

export default PlayerHolder;
