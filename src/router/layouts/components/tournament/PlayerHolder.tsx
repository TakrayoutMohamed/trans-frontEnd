import {useState} from 'react'
import Svg from './Svg'
import { playerPfp } from '@/media-exporting'
import { invitePlayer } from '@/media-exporting'
import FriendsList from './FriendsList'


interface PlayerHolderProps{
	id: number;
	winner: boolean;
	joinable: boolean;
}

const PlayerHolder = ({id, winner, joinable = true}: PlayerHolderProps) => {
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
				{joinable && <Svg src={invitePlayer} width={25} handlePlayerInvite={handlePlayerInvite} /> }
				{joinable && inviteMode && <FriendsList />}

			</div>
		</div>
	)
}

export default PlayerHolder;
