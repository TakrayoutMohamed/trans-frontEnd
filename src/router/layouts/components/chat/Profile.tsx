import { chatProfileStyles } from "@/src/router/styles";
import { useLocation } from "react-router-dom";

interface ProfileProps {
  isProfileVisible: boolean;
}

const Profile = ({ isProfileVisible }: ProfileProps) => {
  const location = useLocation();
  if (!isProfileVisible || location.pathname === "/chat") return <></>;
  return (
    <>
      <div className={`${chatProfileStyles}`}>
        profile componen ssssss sssssst
      </div>
    </>
  );
};

export default Profile;
