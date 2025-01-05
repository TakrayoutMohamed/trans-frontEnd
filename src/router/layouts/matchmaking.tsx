import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/src/states/store";
import { w3cwebsocket } from "websocket";
import Game from "@src/router/layouts/Game2";

const Match: React.FC = () => {
  const [inQueue, setInQueue] = useState<boolean>(false);
  const [gameId, setGameId] = useState<number>(0);
  const wsRef = useRef<w3cwebsocket | null>(null);
  const AccessToken = useSelector((state: RootState) => state.accessToken.value);

  const userData = useSelector((state: RootState) => state.user.value);
  const username = userData.username;
  const level = userData.level ;


  useEffect(() => {
    return () => {
        if (wsRef.current)
          if (wsRef.current.readyState === WebSocket.OPEN) {
            wsRef.current.close();
          }
      };
  }, []);

  const handleStartQueue = (): void => {
    setInQueue(true);

    if (!AccessToken) return; // Don't initialize if no AccessToken
    
    wsRef.current = new w3cwebsocket(
        `${process.env.BACKEND_API_SOCKETS}/ws/matchmaking/?token=${AccessToken}`
    );

    wsRef.current.onopen = () => {
        console.log("WebSocket matchmaking connection established");
        wsRef.current?.send(JSON.stringify({
            type: 'join_matchmaking',
            player_username: username,
            level: level,
          }));
      };

    wsRef.current.onmessage = (event) => {
        try {
        const data = JSON.parse(event.data.toString());
        // console.log("Message received:", data);
            
        switch(data.type) {
            case 'match_found':
            console.log("Match found:", data.match as number);
            setGameId(data.match);
            break;
            default:
            console.log("Unknown message type:", data.type);
            }
            
        } catch (error) {
            console.error("Error parsing message:", error);
        }
    };

    wsRef.current.onclose = () => {
        console.log("WebSocket matchmaking closed");
        };
      
  };

  const handleLeaveQueue = (): void => {
    setInQueue(false);

    if (wsRef.current) {
      wsRef.current.close();
      wsRef.current = null;
    }
  };

  return gameId ? (
    <Game gameId={gameId} />
  ) : (
    <div className="w-full h-screen flex flex-col justify-center items-center ">
      <div className="flex flex-col gap-y-3.5  backdrop-blur-sm justify-center items-center bg-gray-800 text-white rounded-lg shadow-md p-6 w-full max-w-md mx-auto border border-gray-700 h-1/4">
        <h2 className="text-2xl font-bold mb-3 text-orange-500">
          Matchmaking Queue
        </h2>

        <button
          onClick={inQueue ? handleLeaveQueue : handleStartQueue}
          className={`w-full py-2 mt-4 text-lg font-bold rounded-md transition duration-200 ${
            inQueue
              ? "bg-red-600 hover:bg-red text-white"
              : "bg-orange-500 hover:bg-orange-600 text-white"
          }`}
        >
          {inQueue ? "Leave Queue" : "Join Queue"}
        </button>

        {inQueue && (
          <div className="mt-6 flex items-center justify-center space-x-2 text-gray-300">
            <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-orange-500"></div>
            <span className="text-sm">Finding match...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Match;