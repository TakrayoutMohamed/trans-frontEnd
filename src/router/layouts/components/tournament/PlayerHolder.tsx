import {useState, useRef} from 'react'
import { w3cwebsocket } from "websocket";
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
	Player: string;
	socket: w3cwebsocket;
}

const PlayerHolder = ({id, winner, joinable, FriendsData = undefined, focusedId, setFocusedId = (id:number) => (id), Player, socket}: PlayerHolderProps) => {
	const [inviteMode, setInviteMode] = useState(false)
	const inviteButtonRef = useRef(null)
	console.log(winner)

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


	let text = "Player"
	if (joinable)
		text = Player

	return (
		<div className="PlayerHolder">
		{ /* TODO : add coloring to the Tournament winner */ }
			<div className="PlayerData">
				<Svg src={playerPfp} width={43}/>
				{text}
			</div>
			<div className="InviteButton">
				{Player && !Player.startsWith('Player') && <Svg src={CancelPlayer} width={25} handlePlayerInvite={() => {console.log("player cancel still not yet implemented")}}/> }
				{Player && Player.startsWith('Player') && joinable && <Svg Ref={inviteButtonRef} src={invitePlayer} width={25} handlePlayerInvite={handlePlayerInvite}/> }
				{joinable && inviteMode && id == focusedId && <FriendsList FriendsData={FriendsData} setFocusedId={setFocusedId} focusedId={focusedId} PlayerHolderid={id} inviteButtonRef={inviteButtonRef} socket={socket}/>}
			</div>
		</div>
	)
}

export default PlayerHolder;
