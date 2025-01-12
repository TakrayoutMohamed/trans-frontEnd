import { profileIcon, selverMedalLevel1Icon } from "@/media-exporting";
import { gameLeaderBoardInGame } from "../../styles";
import { useEffect, useState } from "react";
import { axiosPrivate } from "@/src/services/api/axios";
import { UserDataType } from "@/src/customDataTypes/UserDataType";

const LeaderBordInGame = () => {
  const [leaderBoardData, setLeaderBoardData] = useState<UserDataType[]>([]);
  useEffect(() => {
    axiosPrivate.get("leaderboard").then((res) => {
      setLeaderBoardData(res.data)
    })
    .catch((err)=> {
      console.log(err);
    })
  }, [])
  return (
    <>
      <div className={gameLeaderBoardInGame}>
        <table className="">
          <thead className="">
            <tr className="">
              <th className="">RANK</th>
              <th className="" style={{visibility:"hidden"}}>Image</th>
              <th className="">NAME</th>
              <th className=" ">SCORE</th>
              <th className="">LEVEL</th>
              <th>MEDAL</th>
            </tr>
          </thead>
          <tbody className="">
            {!leaderBoardData || !leaderBoardData.length ? (
              <tr className="">
                <td colSpan={6}> No data in Leader board!!</td>
              </tr>
            ) : (
              leaderBoardData.map((player, index) =>
                index < 6 ? (
                  <tr
                    key={index}
                    className=""
                  >
                    <th scope="col" className="">
                      {player.rank}
                    </th>
                    <td className="user-image-container">
                      <img
                        src={player.avatar ? process.env.BACKEND_API_URL + "" + player.avatar
                        : profileIcon }
                        className="user-image"
                        alt="user image"
                      />
                    </td>
                    <td className="username">{player.username}</td>
                    <td className="score">{player.score}xp</td>
                    <td className="level">{player.level}</td>
                    <td className="">
                      <img
                        src={player.medal ? "/assets/icons/"+player.medal+".svg"
                        : selverMedalLevel1Icon }
                        className="medal-image"
                        alt="medal image"
                      />
                    </td>
                  </tr>
                ) : (
                  <tr key={index} className="d-none"></tr>
                )
              )
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default LeaderBordInGame;
