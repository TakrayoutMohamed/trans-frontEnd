import { useSelector } from "react-redux";
import { w3cwebsocket } from "websocket";
import TournamentBodyLeftSide from "./TournamentBodyLeftSide";
import TournamentBodyMiddleSide from "./TournamentBodyMiddleSide";
import TournamentBodyRightSide from "./TournamentBodyRightSide";
import { RootState } from "@/src/states/store";
import { useEffect, useState, useCallback, useLayoutEffect } from "react";
import { UserDataType } from "@/src/states/authentication/userSlice";

interface FriendsDataType extends UserDataType {
  joined: boolean;
}

const TournamentBody = () => {
  const friendsDataGlobal = useSelector(
    (state: RootState) => state.friends.value
  );

  const [friendsData, setFriendsData] = useState<FriendsDataType[]>([]);
  const [TournamentPlayers, setTournamentPlayer] = useState(["", "", "", ""]);
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

  console.log("conecting to backend socket!");
  const AccessToken = useSelector(
    (state: RootState) => state.accessToken.value
  );

  useEffect(() => {
	 
	let tournamentSocket: w3cwebsocket;
	console.log("CONNECTING TO WEBSOCKER")
	if (AccessToken) {
		tournamentSocket = new w3cwebsocket(
			`${process.env.BACKEND_API_SOCKETS}/ws/tournament/?token=${AccessToken}`
		);
		console.log("token=", AccessToken)
	}
	console.log("TournamentPlayers : ", TournamentPlayers)

	tournamentSocket.onmessage = function(e){
		let data = JSON.parse(e.data)
		let tmpTournamentPlayers = TournamentPlayers
		tmpTournamentPlayers[0] = data.player1_username
		setTournamentPlayer(tmpTournamentPlayers)
		console.log("Data : ", data)
		console.log("first player name = ", data.player1_username)
		console.log("TournamentPlayers : ", TournamentPlayers)
	}
  }, [TournamentPlayers])




	const [focusedId, setFocusedId] = useState(0)

  return (
    <div className="TournamentBody">
      <TournamentBodyLeftSide FriendsData={friendsDataGlobal} focusedId={focusedId} setFocusedId={setFocusedId} TournamentPlayers={TournamentPlayers}/>
      <TournamentBodyMiddleSide />
      <TournamentBodyRightSide FriendsData={friendsDataGlobal} focusedId={focusedId} setFocusedId={setFocusedId} TournamentPlayers={TournamentPlayers}/>
    </div>
  );
};

export default TournamentBody;
