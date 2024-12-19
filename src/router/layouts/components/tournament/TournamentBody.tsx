import { useSelector } from "react-redux";
import TournamentBodyLeftSide from "./TournamentBodyLeftSide";
import TournamentBodyMiddleSide from "./TournamentBodyMiddleSide";
import TournamentBodyRightSide from "./TournamentBodyRightSide";
import { RootState } from "@/src/states/store";
import { useEffect, useState } from "react";
import { UserDataType } from "@/src/states/authentication/userSlice";

interface FriendsDataType extends UserDataType {
  joined: boolean;
}

const TournamentBody = () => {
  const friendsDataGlobal = useSelector(
    (state: RootState) => state.friends.value
  );

  const [friendsData, setFriendsData] = useState<FriendsDataType[]>([]);
  useEffect(() => {
    if (!friendsData || !friendsData.length)
      setFriendsData(
        friendsDataGlobal.map((friend) => {
          return { ...friend, joined: false };
        })
      );
    else {
      setFriendsData(
        friendsDataGlobal.map((friend) => {
          return {
            ...friend,
            joined: friendsData.find((object) => {
              return object.username === friend.username;
            })?.joined
              ? true
              : false,
          };
        })
      );
    }
    friendsData.map((friend) => {
      return { ...friend, joined: !friend?.joined ? false : true };
    });
  }, [friendsDataGlobal]);

{ /* debugging stuff
	const dummyFriendsData: UserDataType[] = [
	  { "username": "Available", "is_online" : true },
	  { "username": "Ready", "is_online" : false },
	  { "username": "Started", "is_online" : true  },
	  { "username": "Stssssarteds", "is_online" : true  }
	];

	const [friends,setFriends] = useState(dummyFriendsData)

	setTimeout(() => {

		const tmp = friends
		let elem = {} as UserDataType;
		let elem2 = {} as UserDataType;

		elem.username = "jeff"
		elem.is_online = true
		elem2.username = "jeff2"
		elem2.is_online = false
		tmp.push(elem)
		tmp.push(elem2)

		setFriends(tmp)
		}, 1000)
	*/ }

  return (
    <div className="TournamentBody">
      <TournamentBodyLeftSide FriendsData={friendsDataGlobal}/>
      <TournamentBodyMiddleSide />
      <TournamentBodyRightSide FriendsData={friendsDataGlobal}/>
    </div>
  );
};

export default TournamentBody;
