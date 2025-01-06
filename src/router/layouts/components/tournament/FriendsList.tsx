import { useEffect, useState, useRef } from 'react'

interface FriendsListProps{
	setFocusedId: any,
	focusedId: number
	PlayerHolderid: number,
	inviteButtonRef: any;
	setTournamentPlayer: any;
	TournamentPlayers : any ;
}

const FriendsList = ({setFocusedId, TournamentPlayers, focusedId, PlayerHolderid, inviteButtonRef, setTournamentPlayer}: FriendsListProps) => {
	const [joined, setJoined] = useState(false)
	const friendsListRef = useRef<HTMLDivElement | null>(null)

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
			if (textinput === array[0]
				|| textinput === array[1]
				|| textinput === array[2]
				|| textinput === array[3]
			)
				return
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
