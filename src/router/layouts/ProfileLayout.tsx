import { Fragment } from "react";
import { profileLayout } from "../styles";
import { Outlet } from "react-router-dom";
import Stats from "./components/profile/Stats";

enum statsType {
  AISTATS,
  TOURNAMENTSTATS,
  CLASSICSTATS,
}

const ProfileLayout = () => {
  return (
    <Fragment>
      <div className={`${profileLayout}`}>
        <div className="aiStats">
          <Stats title={"AI STATS"} statsType={statsType.AISTATS}></Stats>
        </div>
        <div className="classicTournamentStats">
          <div className="classicStats">
            <Stats
              title={"CLASSIC STATS"}
              statsType={statsType.CLASSICSTATS}
            ></Stats>
          </div>
          {/* <div className="" style={{minHeight:"20em"}} ></div> */}
          <div className="tournamentStats">
            <Stats
              title={"TOURNAMENT STATS"}
              statsType={statsType.TOURNAMENTSTATS}
            ></Stats>
          </div>
        </div>
        <div className="profileStats">
          <Outlet />
        </div>
        <div className="breadcrumbs"></div>
        <div className="waletStats"></div>
      </div>
    </Fragment>
  );
};

export default ProfileLayout;
