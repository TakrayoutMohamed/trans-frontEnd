import { useSelector } from 'react-redux';
import TournamentBodyLeftSide from './TournamentBodyLeftSide'
import TournamentBodyMiddleSide from './TournamentBodyMiddleSide'
import TournamentBodyRightSide from './TournamentBodyRightSide'
import { RootState } from '@/src/states/store';
import { useEffect, useState } from 'react';
import { UserDataType } from '@/src/states/authentication/userSlice';

interface FriendsDataType{
	joined: boolean;
	UserData : UserDataType
}

const TournamentBody = () => {
	const friendsDataGlobal = useSelector((state: RootState) => state.friends.value);
	const [friendsData, setFriendsData] = useState<FriendsDataType[]>([]);
	useEffect(() => {
		if (!friendsData)
			setFriendsData(friendsDataGlobal);
		else{
			setFriendsData(friendsDataGlobal);
		}
		friendsData.map((friend) => { return {...friend, joined: !friend?.joined ? false : true}})
	}, [friendsDataGlobal])
	console.log("")

	return (
		<div className='TournamentBody'>
			<TournamentBodyLeftSide/>
			<TournamentBodyMiddleSide />
			<TournamentBodyRightSide />
		</div>
	)
}

export default TournamentBody;
