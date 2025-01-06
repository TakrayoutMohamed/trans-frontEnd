import { useState } from "react";
import { tournamentLayout } from "../styles";
import StartButton from "./components/tournament/StartButton";
import TournamentBody from "./components/tournament/TournamentBody";
import TournamentLogo from "./components/tournament/TournamentLogo";

const TournamentLayout = () => {
  const [StartButtonState, setStartButtonState] = useState(0);
  return (
    <div className={`${tournamentLayout}`}>
      <TournamentLogo />
      <TournamentBody setStartButtonState={setStartButtonState}/>
      <StartButton StartButtonState={StartButtonState} setStartButtonState={setStartButtonState}/>
    </div>
  );
};

export default TournamentLayout;
