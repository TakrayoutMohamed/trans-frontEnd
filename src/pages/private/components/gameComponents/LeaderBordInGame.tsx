import { goldenMedalIcon, profileIcon, selverMedalLevel1Icon } from "@/media-exporting";

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
      <div className="d-none d-md-block col-1 m-2 p-5"></div>
      <table className="d-flex flex-column w-100 mx-2">
        <thead className="">
          <tr className="d-flex justify-content-around my-2 px-0 text-center">
            <th scope="row">RANK</th>
            <th scope="row"></th>
            <th scope="row">NAME</th>
            <th scope="row">SCORE</th>
            <th scope="row">LEVEL</th>
            <th scope="row">MEDAL</th>
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
                  <th scope="col" className="my-auto p-2">
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
                  <td className="my-auto p-0">{player.level}</td>
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
    </>
  );
};

export default LeaderBordInGame;
