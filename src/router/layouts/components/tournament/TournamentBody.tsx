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
  console.log("");

  {
    /* JEFF TODO : pass friendsData to PlayerHolder's and display the friends!!!! PS : we need a dummy friend data */
  }

	const dummyFriendsData = [
	  { "username": "Available", "is_online" : true },
	  { "username": "Ready", "is_online" : false },
	  { "username": "Started", "is_online" : true  }
	];

  return (
    <div className="TournamentBody">
      <TournamentBodyLeftSide FriendsData={dummyFriendsData}/>
      <TournamentBodyMiddleSide />
      <TournamentBodyRightSide />
    </div>
  );
};

export default TournamentBody;
