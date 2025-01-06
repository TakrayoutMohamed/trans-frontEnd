import TournamentBodyLeftSide from "./TournamentBodyLeftSide";
import TournamentBodyMiddleSide from "./TournamentBodyMiddleSide";
import TournamentBodyRightSide from "./TournamentBodyRightSide";

import { useEffect, useState, } from "react";

const TournamentBody = (props: any) => {

  const [TournamentPlayers, setTournamentPlayer] = useState(["", "", "", "", "", ""]);
  const [focusedId, setFocusedId] = useState(0)

  useEffect(() => {
    console.log('TournamentPlayers changed -> ' , TournamentPlayers);
    if (TournamentPlayers[0] != ''
     && TournamentPlayers[1] != '' 
     && TournamentPlayers[2] != '' 
     && TournamentPlayers[3] != ''){
      props.setStartTournment(true);
      }
    else
    props.setStartTournment(false);
  }, [TournamentPlayers])
  

  return (
    <div className="TournamentBody">
      <TournamentBodyLeftSide setStartTournment={props.setStartTournment} focusedId={focusedId} setFocusedId={setFocusedId} TournamentPlayers={TournamentPlayers} setTournamentPlayer={setTournamentPlayer} />
      <TournamentBodyMiddleSide setStartTournment={props.setStartTournment} focusedId={focusedId} setFocusedId={setFocusedId} TournamentPlayers={TournamentPlayers} setTournamentPlayer={setTournamentPlayer} />
      <TournamentBodyRightSide setStartTournment={props.setStartTournment} focusedId={focusedId} setFocusedId={setFocusedId} TournamentPlayers={TournamentPlayers} setTournamentPlayer={setTournamentPlayer}/>
    </div>
  );
};

export default TournamentBody;
