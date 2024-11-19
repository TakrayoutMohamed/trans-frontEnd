import { Fragment } from "react";
import { profileLayout } from "../styles";
import { Link, NavLink, Outlet } from "react-router-dom";
import Stats from "./components/profile/Stats";
import { profileIcon } from "@/media-exporting";

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
          <Stats title={"AI STATS"} statsType={statsType.AISTATS} />
        </div>
        <div className="classicTournamentStats">
          <div className="classicStats">
            <Stats title={"CLASSIC STATS"} statsType={statsType.CLASSICSTATS} />
          </div>
          <div className="tournamentStats">
            <Stats
              title={"TOURNAMENT STATS"}
              statsType={statsType.TOURNAMENTSTATS}
            />
          </div>
        </div>
        <div className="profileStatsLayout">
          <div className="profile-side-bar">
            <NavLink className="" to="recent">
              Recent
            </NavLink>
            <NavLink className="" to="me" >
              Profile
            </NavLink>
            <NavLink className="" to="friends">
              Friends
            </NavLink>
          </div>
          <div className="user-image-link-content">
            <div className="user-image">
              <svg className="">
                <image
                  width="100%"
                  height="100%"
                  href="/assets/images/profileBackgroundCurve.svg"
                  className="mt-autos"
                />
              </svg>
              <div className="">
                <img src={profileIcon} alt="user image" />
              </div>
            </div>
            <div className="link-content">
              <Outlet />
            </div>
          </div>
        </div>
        <div className="breadcrumbs"></div>
        <div className="waletStats"></div>
      </div>
    </Fragment>
  );
};

export default ProfileLayout;
