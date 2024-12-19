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
}

const PlayerHolder = ({id, winner, joinable = true, FriendsData = undefined}: PlayerHolderProps) => {
	const [inviteMode, setInviteMode] = useState(false)

	if (id == 1 || id == 2) {
		console.log(winner)
		console.log(`Friends data in ${id}`)
		console.log(FriendsData)
	}

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
				{joinable && <Svg src={invitePlayer} width={25} handlePlayerInvite={handlePlayerInvite} /> }
				{joinable && inviteMode && <FriendsList FriendsData={FriendsData}/>}

			</div>
		</div>
	)
}

export default PlayerHolder;
