import { profileIcon } from "@/media-exporting";

const data = [
  {
    player1: { name: "alvares", scored: 6 },
    player2: { name: "negredo", scored: 7 },
  },
  {
    player1: { name: "alvares1", scored: 6 },
    player2: { name: "negredo1", scored: 3 },
  },
  {
    player1: { name: "alvares4", scored: 6 },
    player2: { name: "negredo4", scored: 3 },
  },
  {
    player1: { name: "alvares5", scored: 6 },
    player2: { name: "negredo5", scored: 3 },
  },
  {
    player1: { name: "alvares2", scored: 12 },
    player2: { name: "negredo2", scored: 10 },
  },
  {
    player1: { name: "negredoooo3", scored: 9 },
    player2: { name: "alvaresssss3", scored: 6 },
  },
];

type PlayerInfoProps = {
  player: {
    name: string;
    scored: number;
  };
  isWinner: boolean;
};

const NameAndImageIcon = ({ player, isWinner }: PlayerInfoProps) => {
  return isWinner ? (
    <div className="d-flex flex-row w-100">
      <img
        src={profileIcon}
        alt="playerIcon"
        height="100%"
        width="40%"
        className="bg-success rounded-circle"
      />
      <div className="fw-medium w-100 text-center my-auto" title={player.name}>
        {player.name.length > 8 && player.name.substring(0, 6).concat("...")}
        {player.name.length <= 8 && player.name}
      </div>
    </div>
  ) : (
    <div className="d-flex flex-row w-100">
      <div className="fw-medium w-100 text-center my-auto " title={player.name}>
        {player.name.length > 8 && player.name.substring(0, 6).concat("...")}
        {player.name.length <= 8 && player.name}
      </div>
      <img
        src={profileIcon}
        alt="playerIcon"
        height="100%"
        width="40%"
        className="bg-danger rounded-circle"
      />
    </div>
  );
};

interface GamesType {
  player1: {
    name: string;
    scored: number;
  },
  player2: {
    name: string;
    scored: number;
  }
};

const RecentInGame = () => {
  let matches: GamesType[] | undefined = data;

  return (
    <>
      <div className="w-100 m-0">
        <div className="h3 text-center">Recent</div>
        <div className="d-flex flex-column rounded-5 border p-1 m-0">
          {!matches || !matches.length && <div className="h4 text-warning"> No matches yet</div>}
          {matches &&
            matches?.map((match, index) => (
              <div
                key={index}
                className="bg-primary bg-opacity-50 d-flex rounded-5 mb-1 p-1 justify-content-between"
              >
                {match.player1.scored >= match.player2.scored ? (
                  <>
                    <NameAndImageIcon player={match.player1} isWinner={true} />
                    <div className="h3 m-auto">VS</div>
                    <NameAndImageIcon player={match.player2} isWinner={false} />
                  </>
                ) : (
                  <>
                    <NameAndImageIcon player={match.player2} isWinner={true} />
                    <div className="h3 m-auto">VS</div>
                    <NameAndImageIcon player={match.player1} isWinner={false} />
                  </>
                )}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default RecentInGame;
