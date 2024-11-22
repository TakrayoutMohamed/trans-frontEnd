import { friends } from "./styles";

const data = [
  { user: "alvares1", level: "12.25", photo: "user1photo" },
  { user: "alvares2", level: "12.25", photo: "user1photo" },
  { user: "alvares3", level: "12.25", photo: "user1photo" },
  { user: "alvares4", level: "12.25", photo: "user1photo" },
  { user: "alvares5", level: "12.25", photo: "user1photo" },
  { user: "alvares6", level: "12.25", photo: "user1photo" },
  { user: "alvares7", level: "12.25", photo: "user1photo" },
  { user: "alvares8", level: "12.25", photo: "user1photo" },
  { user: "alvares9", level: "12.25", photo: "user1photo" },
  { user: "alvares10", level: "12.25", photo: "user1photo" },
  { user: "alvares11", level: "12.25", photo: "user1photo" },
  { user: "alvares12", level: "12.25", photo: "user1photo" },
  { user: "alvares13", level: "12.25", photo: "user1photo" },
  { user: "alvares14", level: "12.25", photo: "user1photo" },
  { user: "alvares15", level: "12.25", photo: "user1photo" },
  { user: "alvares16", level: "12.25", photo: "user1photo" },
  { user: "alvares17", level: "12.25", photo: "user1photo" },
  
];

const Friends = () => {
  return (
    <div className={`${friends}`}>
      <div className="">
        {data &&
          data.length &&
          data.map((friend, index) => (
            <p className="" key={index}>fdasfads
              {/* <span className={`${match.state}`}>{match.user + " "}</span>
              {match.state} against
              <span className={match.state === "win" ? "lose" : "win" }> {" " + match.against}</span> */}
            </p>
          ))}
        {/* <div className=""></div> */}
      </div>
    </div>
  );
};

export default Friends;
