import { gameIcon, profileIcon, tournamentIcon } from "@/media-exporting";
import { chatProfileStyles } from "@/src/router/styles";
import { useContext } from "react";
import { MdBlock } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";

import { blockUser } from "@/src/pages/modules/fetchingData";
import UseAxiosPrivate from "@/src/services/hooks/UseAxiosPrivate";
import { ChatDataContext } from "@/src/customDataTypes/ChatDataContext";

interface ProfileProps {
  isProfileVisible: boolean;
}

const Profile = ({ isProfileVisible }: ProfileProps) => {
  const location = useLocation();

  const navigate = useNavigate();
  const axiosPrivateHook = UseAxiosPrivate();
  const chatContext = useContext(ChatDataContext);

  console.log("pathname = " + location.pathname);
  if (!chatContext)
    throw new Error("it should be wraped inside a chatContext");
  const {userData} = chatContext;
  console.log(userData);

  if (
    !isProfileVisible ||
    location.pathname === "/chat" ||
    location.pathname === "/chat/"
  )
    return <></>;
  return (
    <>
      <div className={`${chatProfileStyles}`}>
        <div className="profileImage">
          <img
            src={
              userData?.avatar
                ? process.env.BACKEND_API_URL + userData.avatar
                : profileIcon
            }
            width={12}
            alt=""
          />
        </div>
        <button onClick={() => navigate("/profile/" + userData?.username)}>
          <div className="">
            <img src={profileIcon} alt="" />
          </div>
          <p className="">Profile</p>
        </button>
        <button>
          <div className="">
            <img src={gameIcon} width={28} alt="" />
          </div>
          <p className="">Invite Ping Pong</p>
        </button>
        <button>
          <div className="">
            <img src={gameIcon} width={28} alt="" />
          </div>
          <p className="">Invite Game 2</p>
        </button>
        <button>
          <div className="">
            <img src={tournamentIcon} alt="" />
          </div>
          <p className="">Invite Tournament</p>
        </button>

        <button onClick={() => blockUser(axiosPrivateHook, userData?.username+"")}>
          <div className="">
            <MdBlock size={"28"} />
          </div>
          <p className="">Block {userData?.username}</p>
        </button>
      </div>
    </>
  );
};

export default Profile;
