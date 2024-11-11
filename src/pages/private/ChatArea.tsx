import { useOutletContext, useParams } from "react-router-dom";

// interface ProfileVisibilite {
//   setProfileVisible: React.Dispatch<React.SetStateAction<boolean>>;
// }

const ChatArea = () => {
  const { userName } = useParams();
  const setProfileVisible = useOutletContext<React.Dispatch<React.SetStateAction<boolean>>>();
  // setProfileVisible((pre) => {console.log(pre); return pre});
  console.log("chat area reloaded")
  return (
    <>
      <div className="success">
        <button onClick={() => setProfileVisible((prev) => !prev)}>
          click me
        </button>
        Chat Area of the user {userName}
      </div>
    </>
  );
};

export default ChatArea;
