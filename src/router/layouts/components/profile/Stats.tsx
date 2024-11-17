import { profileStats } from "@/src/router/styles";

const matchesData = {
    data: [
      {
        matches: 26,
        win: 23,
        lose: 3,
      },
      {
        matches: 26,
        win: 23,
        lose: 3,
      },
      {
        matches: 26,
        win: 23,
        lose: 3,
      },
    ],
  };

export enum statsType {
    AISTATS,
    TOURNAMENTSTATS,
    CLASSICSTATS,
  }
  
  interface StatsProps {
    title: string;
    statsType: statsType;
  }
  
  const Stats = ({ title, statsType }: StatsProps) => {
    return (
      <>
        <div className={`${profileStats}`}>
          <div className="h3">{title}</div>
          <div className="d-flex flex-row">
            <div className="">Matches</div>
            <div className="p-1 bg-info"></div>
            <div className="">{matchesData.data[statsType].matches}</div>
          </div>
          <div className="d-flex flex-row">
            <div className="">Wins</div>
            <div className="p-1 bg-info"></div>
            <div className="">{matchesData.data[statsType].win}</div>
          </div>
          <div className="d-flex flex-row">
            <div className="">Loses</div>
            <div className="p-1 bg-info"></div>
            <div className="">{matchesData.data[statsType].lose}</div>
          </div>
        </div>
      </>
    );
  };

export default Stats