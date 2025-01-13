import { w3cwebsocket } from "websocket";
import { useSelector } from "react-redux";
import { RootState } from "@/src/states/store";
const Contact = () => {
  const AccessToken = useSelector(
    (state: RootState) => state.accessToken.value
  );
  const userData = useSelector((state: RootState) => state.user.value);
  let client: w3cwebsocket;
  if (AccessToken) {
    client = new w3cwebsocket(
      `${process.env.BACKEND_API_SOCKETS}/ws/notification/?token=${AccessToken}`
    );
      client.onopen = () => {
      };
      client.onmessage = () => {
      };
      client.onclose = () => {
      };
  }
  const sendMessage = () => {
    const data = {
      Sender: userData.username,
      Reciever: "receiverUserName",
      message: `hello this is a message from the user[${userData.username}]`,
    };
    client.send(JSON.stringify(data));
  };

  return (
    <div>
      <div className="btn btn-info" onClick={sendMessage}>
        {" "}
        send Message{" "}
      </div>
      Contact
    </div>
  );
};

export default Contact;
