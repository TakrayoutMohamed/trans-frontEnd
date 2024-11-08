import { goldenMedalIcon, profileIcon, selverMedalLevel1Icon } from "@/media-exporting";
import { gameLeaderBoardInGame } from "../../styles";

const data = [
  {
    rank: 1,
    image: profileIcon,
    name: "alvares",
    score: 120.23,
    level: 12.2,
    medal: selverMedalLevel1Icon,
  },
  {
    rank: 2,
    image: profileIcon,
    name: "alvares",
    score: 120.23,
    level: 12.2,
    medal: goldenMedalIcon,
  },
  {
    rank: 3,
    image: profileIcon,
    name: "alvares",
    score: 120.23,
    level: 12.2,
    medal: selverMedalLevel1Icon,
  },
  {
    rank: 4,
    image: profileIcon,
    name: "alvares",
    score: 120.23,
    level: 12.2,
    medal: selverMedalLevel1Icon,
  },
  {
    rank: 5,
    image: profileIcon,
    name: "alvares",
    score: 120.23,
    level: 12.2,
    medal: selverMedalLevel1Icon,
  },
  {
    rank: 6,
    image: profileIcon,
    name: "alvares",
    score: 120.23,
    level: 12.2,
    medal: selverMedalLevel1Icon,
  },
  {
    rank: 7,
    image: profileIcon,
    name: "alvares",
    score: 120.23,
    level: 12.2,
    medal: selverMedalLevel1Icon,
  },
  {
    rank: 8,
    image: profileIcon,
    name: "alvares",
    score: 120.23,
    level: 12.2,
    medal: selverMedalLevel1Icon,
  },
  {
    rank: 9,
    image: profileIcon,
    name: "alvares",
    score: 120.23,
    level: 12.2,
    medal: selverMedalLevel1Icon,
  },
  {
    rank: 10,
    image: profileIcon,
    name: "alvares",
    score: 120.23,
    level: 12.2,
    medal: selverMedalLevel1Icon,
  },
];

interface PlayerData {
  rank: number;
  image: string;
  name: string;
  score: number;
  level: number;
  medal: string;
}

const LeaderBordInGame = () => {
  const players: PlayerData[] = data;
  return (
    <>
      <div className={`bg-infoe d-flex flex-row col-12 ${gameLeaderBoardInGame}`}>
        <div className="bg-successs d-none d-md-block col-1 h-auto m-0 p-0"></div>
        <table className="d-flex flex-column w-100 ">
          <thead className="">
            <tr className="d-flex justify-content-around my-2 px-0 text-center">
              <th className="d-none d-sm-block">RANK</th>
              <th className="">{""}</th>
              <th>NAME</th>
              <th className="">SCORE</th>
              <th className="d-none d-sm-block">LEVEL</th>
              <th>MEDAL</th>
            </tr>
          </thead>
          <tbody className="">
            {!players || !players.length ? (
              <tr className="text-center">
                <td colSpan={6}> No data in Leader board!!</td>
              </tr>
            ) : (
              players.map((player, index) =>
                index < 6 ? (
                  <tr
                    key={index}
                    className="bg-secondary bg-opacity-50 d-flex justify-content-around rounded-5 text-center my-2 px-0 "
                  >
                    <th scope="col" className="my-auto p-2  d-none d-sm-block">
                      {player.rank}
                    </th>
                    <td className="my-auto p-0">
                      <img
                        src={player.image}
                        height="100%"
                        width="100%"
                        className="bg-success rounded-circle m-0"
                        alt="user image"
                      />
                    </td>
                    <td className="my-auto p-0">{player.name}</td>
                    <td className="my-auto p-0">{player.score}xp</td>
                    <td className="my-auto p-0 d-none d-sm-block">{player.level}</td>
                    <td className="my-auto p-0">
                      <img
                        src={player.medal}
                        height="100%"
                        width="80%"
                        className="bg-dark rounded-circle"
                        alt="medal image"
                      />
                    </td>
                  </tr>
                ) : (
                  <tr key={index} className="p-0 m-0"></tr>
                )
              )
            )}
          </tbody>
        </table>
        <div className=" bg-successs d-none d-md-block col-1 h-100 m-0 p-0"></div>
      </div>
    </>
  );
};

export default LeaderBordInGame;
