import {useState, useRef} from 'react'
import Svg from './Svg'
import { playerPfp, invitePlayer, CancelPlayer } from '@/media-exporting'
import FriendsList from './FriendsList'
import { UserDataType } from '@/src/states/authentication/userSlice'

interface PlayerHolderProps{
	id: number;
	winner: boolean;
	joinable: boolean;
	FriendsData?: UserDataType[];
	focusedId?: number;
	setFocusedId?: any; // TODO : ask alvares what to do here!!!
	Player?: string;
	socket?: w3cwebsocket;
}

const PlayerHolder = ({id, winner, joinable, FriendsData = undefined, focusedId, setFocusedId = (id:number) => (id), Player, socket}: PlayerHolderProps) => {
	const [inviteMode, setInviteMode] = useState(false)
	const inviteButtonRef = useRef(null)
	//console.log(winner)

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

	const writeToSocket = () => {

		socket.send(JSON.stringify({
			'type' : 'player_leave',
			'player' : Player
		}))

		console.log("player cancel still not yet implemented")
	}


	if (joinable)
		console.log(`Player with id ${id} is ${Player}`)
	let text = "Player"
	if (Player) {
		text = Player
		}
	else if (id)
		text = `Player ${id}`

	return (
		<div className="PlayerHolder">
		{ /* TODO : add coloring to the Tournament winner */ }
			<div className="PlayerData">
				<Svg src={playerPfp} width={43}/>
				{text}
			</div>
			<div className="InviteButton">
				{!Player && joinable && <Svg Ref={inviteButtonRef} src={invitePlayer} width={25} handlePlayerInvite={handlePlayerInvite}/> }
				{Player && <Svg src={CancelPlayer} width={25} handlePlayerInvite={writeToSocket}/> }
				{joinable && inviteMode && id == focusedId && <FriendsList FriendsData={FriendsData} setFocusedId={setFocusedId} focusedId={focusedId} id={id} inviteButtonRef={inviteButtonRef}/>}
			</div>
		</div>
	)
}

export default PlayerHolder;
