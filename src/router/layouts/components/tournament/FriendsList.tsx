import { useEffect, useState, useRef } from 'react'
import { w3cwebsocket } from "websocket";
import { tournamentRobot } from '@/media-exporting'
import { inviteFriend } from '@/media-exporting'
import { inviteFriendFaded } from '@/media-exporting'
import { UserDataType } from '@/src/states/authentication/userSlice'

interface FriendProps{
	index: any,
	name: string,
	online: boolean
	PlayerHolderid: number,
	socket: w3cwebsocket;
}

interface FriendsListProps{
	FriendsData: any,
	setFocusedId: any,
	focusedId: number
	PlayerHolderid: number,
	inviteButtonRef: any;
	socket: w3cwebsocket;
}

const Friend = ({index, name, online=false, PlayerHolderid, socket}: FriendProps) => {
	let color = "#ff4d02"
	if (online)
		color = "#02ff39"

	const [invited, setInvited] = useState(false)

	const handleFriendInvite : any = () => {
		setInvited(true)
		if (socket && socket.readyState === WebSocket.OPEN){
			console.log("socket open, writing to it ...")
			console.log(`inviting ${name} to tournament!!`)
				  socket.send(
					JSON.stringify({
						'type' : 'friend_envite',
						'id': PlayerHolderid,
					})
				  )
		}
		else {
			console.log("can't write to socket !!")
		}
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
				{invited && <img className="InviteFriendButton" src={inviteFriendFaded} width={15}/>}
			</div>

		</div>
	)
}

const FriendsList = ({FriendsData, setFocusedId, focusedId, PlayerHolderid, inviteButtonRef, socket}: FriendsListProps) => {
	const [joined, setJoined] = useState(false)
	const friendsListRef = useRef(null)

	console.log(FriendsData)

	useEffect(() => {
		const closeFriendsList = (e) => {
			if(!friendsListRef.current?.contains(e.target) && !inviteButtonRef.current?.contains(e.target))
				setFocusedId(0)
		}
		document.addEventListener('mousedown', closeFriendsList)
		return () => {
			document.removeEventListener("mousedown", closeFriendsList);
		}

	},[])


	let color = "#B87EA5";
	if (joined)
		color = "#656565"
	return (
		<div className="FriendsList" ref={friendsListRef}>
			<button style={{background: `${color}`}} className="JoinButton">JOIN</button>
			{FriendsData && FriendsData.map((friend : UserDataType , index:number) => (
				<Friend index={index} name={friend.username+""} online={friend.is_online ? true : false} key={friend.username} PlayerHolderid={PlayerHolderid} socket={socket} />
			))}

		</div>
	)
}

export default FriendsList;
