import { useEffect, useState, useRef } from 'react'
import { w3cwebsocket } from "websocket";
import { tournamentRobot } from '@/media-exporting'
import { inviteFriend } from '@/media-exporting'
import { inviteFriendFaded } from '@/media-exporting'
import { UserDataType } from '@/src/customDataTypes/UserDataType';


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
	setTournamentPlayer: any;
	TournamentPlayers : any ;
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

const FriendsList = ({FriendsData, setFocusedId, TournamentPlayers, focusedId, PlayerHolderid, inviteButtonRef, socket, setTournamentPlayer}: FriendsListProps) => {
	const [joined, setJoined] = useState(false)
	const friendsListRef = useRef<HTMLDivElement | null>(null)

	console.log(FriendsData)

	useEffect(() => {
		const closeFriendsList = (e: any) => {
			if(!friendsListRef.current?.contains(e.target) && !inviteButtonRef.current?.contains(e.target))
				setFocusedId(0)
		}
		document.addEventListener('mousedown', closeFriendsList)
		return () => {
			document.removeEventListener("mousedown", closeFriendsList);
		}

	},[])
	const [textinput, settextinput] = useState('');
	const functionTextSet = (event : any) => {
		settextinput(event.target.value);
	};
	const setobject_with_nickname_entered = (textinput : string, id : number) => {
		if (textinput.length != 0){
			console.log(textinput, '->', PlayerHolderid);
			let array = [];
			array[0] = TournamentPlayers[0];
			array[1] = TournamentPlayers[1];
			array[2] = TournamentPlayers[2];
			array[3] = TournamentPlayers[3];
			array[4] = TournamentPlayers[4];
			array[5] = TournamentPlayers[5];
			array[id - 1] =  textinput ;
			setTournamentPlayer(array);
			console.log(TournamentPlayers);
		}
	};
	let color = "#B87EA5";
	if (joined)
		color = "#656565"
	return (
	<div ref={friendsListRef} className="name_seter">
		<div className="input_holder">
			<input onChange={functionTextSet} type='text' value={textinput} className='input_text'></input>
			<div  onClick={()  => (setobject_with_nickname_entered(textinput, PlayerHolderid), setFocusedId(0))} className='submit_but'></div>
		</div>
	</div>
	)
}

export default FriendsList;
