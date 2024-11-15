import { profileIcon } from "@/media-exporting";
import { useParams } from "react-router-dom";

const data = {
  conversation: [
    {
      timestamp: "2024-11-15T08:00:00Z",
      sender: "user2",
      message: "Hey, how are you?",
    },
    {
      timestamp: "2024-11-15T08:00:05Z",
      sender: "alvares",
      message: "I'm doing great, thanks for asking! How about you?",
    },
    {
      timestamp: "2024-11-15T08:00:30Z",
      sender: "user2",
      message:
        "I'm good, just trying to figure out something. Can you help me?",
    },
    {
      timestamp: "2024-11-15T08:00:45Z",
      sender: "alvares",
      message: "Of course! What do you need help with?",
    },
    {
      timestamp: "2024-11-15T08:01:00Z",
      sender: "user2",
      message:
        "I'm trying to format a conversation into JSON, but I'm not sure how to structure it.",
    },
    {
      timestamp: "2024-11-15T08:01:20Z",
      sender: "alvares",
      message:
        "Got it! Here's an example of how a conversation can be structured in JSON format...",
    },
    {
      timestamp: "2024-11-15T08:01:50Z",
      sender: "alvares",
      message:
        "Got it! Here's an example of how a conversation can be structured in JSON format...",
    },
    {
      timestamp: "2024-11-15T08:02:00Z",
      sender: "user2",
      message: "That looks perfect! Thanks for your help!",
    },
    {
      timestamp: "2024-11-15T08:02:15Z",
      sender: "alvares",
      message: "You're welcome! Feel free to reach out if you need anything.",
    },
    {
      timestamp: "2024-11-15T08:02:15Z",
      sender: "alvares",
      message:
        "You're welcome! Feel free to reach out if you need anything else.",
    },
    {
      timestamp: "2024-11-15T08:02:15Z",
      sender: "alvares",
      message: "You're welcome! Feel free to reach out",
    },
    {
      timestamp: "2024-11-15T08:02:15Z",
      sender: "alvares",
      message:
        "You're welcome! Feel free to reach out if you need anything else.",
    },
    {
      timestamp: "2024-11-15T08:02:15Z",
      sender: "user2",
      message:
        "You're welcome! Feel free to reach out if you need anything else.",
    },
    {
      timestamp: "2024-11-15T08:00:00Z",
      sender: "user2",
      message: "Hey, how are you?",
    },
    {
      timestamp: "2024-11-15T08:00:05Z",
      sender: "alvares",
      message: "I'm doing great, thanks for asking! How about you?",
    },
    {
      timestamp: "2024-11-15T08:00:30Z",
      sender: "user2",
      message:
        "I'm good, just trying to figure out something. Can you help me?",
    },
    {
      timestamp: "2024-11-15T08:00:45Z",
      sender: "alvares",
      message: "Of course! What do you need help with?",
    },
    {
      timestamp: "2024-11-15T08:01:00Z",
      sender: "user2",
      message:
        "I'm trying to format a conversation into JSON, but I'm not sure how to structure it.",
    },
    {
      timestamp: "2024-11-15T08:01:20Z",
      sender: "alvares",
      message:
        "Got it! Here's an example of how a conversation can be structured in JSON format...",
    },
    {
      timestamp: "2024-11-15T08:01:50Z",
      sender: "alvares",
      message:
        "Got it! Here's an example of how a conversation can be structured in JSON format...",
    },
    {
      timestamp: "2024-11-15T08:02:00Z",
      sender: "user2",
      message: "That looks perfect! Thanks for your help!",
    },
    {
      timestamp: "2024-11-15T08:02:15Z",
      sender: "alvares",
      message:
        "You're welcome! Feel free to reach out if you need anything else.",
    },
    {
      timestamp: "2024-11-15T08:02:15Z",
      sender: "alvares",
      message:
        "You're welcome! Feel free to reach out if you need anything else.",
    },
    {
      timestamp: "2024-11-15T08:02:15Z",
      sender: "alvares",
      message:
        "You're welcome! Feel free to reach out if you need anything else.",
    },
    {
      timestamp: "2024-11-15T08:02:15Z",
      sender: "alvares",
      message:
        "You're welcome! Feel free to reach out if you need anything else.",
    },
    {
      timestamp: "2024-11-15T08:02:15Z",
      sender: "user2",
      message:
        "You're welcome! Feel free to reach out if you need anything else.",
    },
    {
      timestamp: "2024-11-15T08:00:00Z",
      sender: "user2",
      message: "Hey, how are you?",
    },
    {
      timestamp: "2024-11-15T08:00:05Z",
      sender: "alvares",
      message: "I'm doing great, thanks for asking! How about you?",
    },
    {
      timestamp: "2024-11-15T08:00:30Z",
      sender: "user2",
      message:
        "I'm good, just trying to figure out something. Can you help me?",
    },
    {
      timestamp: "2024-11-15T08:00:45Z",
      sender: "alvares",
      message: "Of course! What do you need help with?",
    },
    {
      timestamp: "2024-11-15T08:01:00Z",
      sender: "user2",
      message:
        "I'm trying to format a conversation into JSON, but I'm not sure how to structure it.",
    },
    {
      timestamp: "2024-11-15T08:01:20Z",
      sender: "alvares",
      message:
        "Got it! Here's an example of how a conversation can be structured in JSON format...",
    },
    {
      timestamp: "2024-11-15T08:01:50Z",
      sender: "alvares",
      message:
        "Got it! Here's an example of how a conversation can be structured in JSON format...",
    },
    {
      timestamp: "2024-11-15T08:02:00Z",
      sender: "user2",
      message: "That looks perfect! Thanks for your help!",
    },
    {
      timestamp: "2024-11-15T08:02:15Z",
      sender: "alvares",
      message:
        "You're welcome! Feel free to reach out if you need anything else.",
    },
    {
      timestamp: "2024-11-15T08:02:15Z",
      sender: "alvares",
      message:
        "You're welcome! Feel free to reach out if you need anything else.",
    },
    {
      timestamp: "2024-11-15T08:02:15Z",
      sender: "alvares",
      message:
        "You're welcome! Feel free to reach out if you need anything else.",
    },
    {
      timestamp: "2024-11-15T08:02:15Z",
      sender: "alvares",
      message:
        "You're welcome! Feel free to reach out if you need anything else.",
    },
    {
      timestamp: "2024-11-15T08:02:15Z",
      sender: "user2",
      message:
        "You're welcome! Feel free to reach out if you need anything else.",
    },
  ],
};

const ConversationContent = () => {
  const { userName } = useParams();
  console.log("conversation Content re-rendered");
  let previousMsgOwner = "";
  return (
    <>
      {data.conversation.map((convers, index) => (
        <div
          key={index}
          className={`bg-infos bg-dangers ${
            previousMsgOwner !== convers.sender && "mt-2"
          } `}
        >
          {convers.sender === userName && (
            <span className="bg-dangers d-flex flex-row align-items-center p-0">
              <p
                className={`ms-auto`}
                style={{
                  width: "fit-content",
                  background: "rgba(217, 191, 255, 1)",
                  textAlign: "right",
                  marginBlock: "1px",
                  borderRadius: "33px",
                  paddingInline: "1px",
                }}
              >
                {convers.message}
              </p>
              {previousMsgOwner !== userName ? (
                <img
                  src={profileIcon}
                  alt=""
                  className="bg-info rounded-end-5 "
                  style={{ marginLeft: "4px" }}
                />
              ) : (
                <div className="bg-info m-0" style={{ width: "35px" }}></div>
              )}
            </span>
          )}
          {convers.sender !== userName && (
            <span className="bg-dangers d-flex flex-row align-items-center p-0">
              <p
                className={``}
                style={{
                  width: "fit-content",
                  background: "rgb(100, 176, 90)",
                  textAlign: "left",
                  marginBlock: "1px",
                  borderRadius: "33px",
                  paddingInline: "2px",
                }}
              >
                {convers.message}
              </p>
            </span>
          )}
          {(previousMsgOwner = convers.sender) && <></>}
        </div>
      ))}
    </>
  );
};

export default ConversationContent;
// background: rgba(217, 191, 255, 1);// background color of the messages
