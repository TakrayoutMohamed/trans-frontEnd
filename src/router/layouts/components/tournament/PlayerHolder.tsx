import {useState} from 'react'
import Svg from './Svg'
import { playerPfp } from '@/media-exporting'
import { invitePlayer } from '@/media-exporting'
import FriendsList from './FriendsList'
import { UserDataType } from '@/src/states/authentication/userSlice'


interface PlayerHolderProps{
	id: number;
	winner: boolean;
	joinable: boolean;
	FriendsData?: UserDataType[];
	focusedId?: number;
	handleClick?: any; // TODO : ask alvares what to do here!!! 
}

const PlayerHolder = ({id, winner, joinable = true, FriendsData = undefined, focusedId, handleClick}: PlayerHolderProps) => {
	const [inviteMode, setInviteMode] = useState(false)

	const handlePlayerInvite : any = () => {
		setInviteMode(!inviteMode)
	}

	let text
	if (id)
		text = `Player ${id}`
	else
		text = "ma3rft hh"
		{/* TODO : ask abelfany achno ndir fblast ma3rf hh */}

	return (
		<div className="PlayerHolder">
		{ /* TODO : add coloring to the Tournament winner */ }
			<div className="PlayerData">
				<Svg src={playerPfp} width={43}/>
				{text}
			</div>
			<div className="InviteButton">
			{/*
				{joinable && <Svg src={invitePlayer} width={25} handlePlayerInvite={handlePlayerInvite} onCLick={() => {handleClick(id)}}/> }
				*/}
				{joinable && <Svg src={invitePlayer} width={25} handlePlayerInvite={handlePlayerInvite} onCLick={() => {handleClick(id)}}/> }
				{joinable && inviteMode && id == focusedId && <FriendsList FriendsData={FriendsData}/>}

			</div>
		</div>
	)
}

export default PlayerHolder;
