import {useState} from 'react'
import useFetch from './useFetch'
import { tournamentRobot } from '@/media-exporting'
import { inviteFriend } from '@/media-exporting'
import Svg from './Svg'
import { UserDataType } from '@/src/states/authentication/userSlice'

interface FriendProps{
	index: any,
	name: string,
	online: boolean
}

const Friend = ({index, name, online=false}: FriendProps) => {
	let color = "#ff4d02"
	if (online)
		color = "#02ff39"

	return (
		<div className="Friend">
			<div className="FriendInfo">
				<div className="FriendPfpContainer">
					<img className='image' style={{display: "inline"}}src={tournamentRobot}/>
				</div>
				<div className="FriendOnline" style={{backgroundColor: `${color}`}}></div>
				<div key={index}>{name}</div>
			</div>
			<div className="InviteFriend">
				<Svg src={inviteFriend} width={15}/>
			</div>

		</div>
	)
}




const FriendsList = () => {
	const friends = useFetch("http://localhost:4000/friends") as UserDataType[]

	const [joined, setJoined] = useState(false)

	const handleJoin = () => {
		setJoined(true)
	}
	let color = "#B87EA5";
	if (joined)
		color = "#656565"
	return (
		<div className="FriendsList">
			<button style={{background: `${color}`}} className="JoinButton" onClick={handleJoin}>JOIN</button>
			{friends && friends.map((friend , index:number) => (
				<Friend index={index} name={friend.username+""} online={friend.is_online ? true : false}/>
			))}

		</div>
	)
}

export default FriendsList;
