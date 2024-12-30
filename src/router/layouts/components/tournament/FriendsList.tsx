import { useEffect, useState, useRef } from 'react'
import { tournamentRobot } from '@/media-exporting'
import { inviteFriend } from '@/media-exporting'
import { inviteFriendFaded } from '@/media-exporting'
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

	const [invited, setInvited] = useState(false)

	const handleFriendInvite : any = () => {
		setInvited(true)
	}

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
				{!invited && <img className="InviteFriendButton" src={inviteFriend} onClick={handleFriendInvite} width={15}/> }
				{invited && <img className="InviteFriendButton" src={inviteFriendFaded} width={15}/> }
			</div>

		</div>
	)
}

const FriendsList = (props) => {
	const [joined, setJoined] = useState(false)
	const friendsListRef = useRef(null)

	console.log(props.FriendsData)

	const handleJoin = () => {
		setJoined(true)
	}


	useEffect(() => {
		const closeFriendsList = (e) => {
			//if (props.id != 1)
			//	return;
			//console.log("myId = ", props.id)
			//console.log("focused id = ", props.focusedId)
			
			if(!friendsListRef.current?.contains(e.target) && !props.inviteButtonRef.current?.contains(e.target))
				props.setFocusedId(0)
		}
		
		document.addEventListener('mousedown', closeFriendsList)
		return () => {
			console.log("deleted event listener!")
			document.removeEventListener("mousedown", closeFriendsList);
		}
		//return () => window.removeEventListener("mousedown", closeFriendsList);

	},[])



	let color = "#B87EA5";
	if (joined)
		color = "#656565"
	return (
		<div className="FriendsList" ref={friendsListRef}>
			{/*
			<button style={{background: `${color}`}} className="JoinButton" onClick={handleJoin}>JOIN</button>
			*/}
			<button style={{background: `${color}`}} className="JoinButton">JOIN</button>
			{props.FriendsData && props.FriendsData.map((friend : UserDataType , index:number) => (
				<Friend index={index} name={friend.username+""} online={friend.is_online ? true : false} key={friend.username}/>
			))}

		</div>
	)
}

export default FriendsList;
