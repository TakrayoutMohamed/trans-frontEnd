import { useState } from "react";
import { tournamentLayout } from "../styles";
import StartButton from "./components/tournament/StartButton";
import TournamentBody from "./components/tournament/TournamentBody";
import TournamentLogo from "./components/tournament/TournamentLogo";

const TournamentLayout = () => {
  const [startTournment, setStartTournment] = useState(false);
  return (
    <div className={`${tournamentLayout}`}>
      <TournamentLogo />
      <TournamentBody setStartTournment={setStartTournment}/>
      <StartButton activated={startTournment}/>
    </div>
  );
};

export default TournamentLayout;
