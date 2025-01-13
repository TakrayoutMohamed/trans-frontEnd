import { GameState, CANVAS_WIDTH, CANVAS_HEIGHT } from './gameTypes';

const BALL_SIZE = 10;

export const updateGameState = (state: GameState, deltaTime: number): GameState => {
  const newLeftPaddleY = state.leftPaddleY;
  const newRightPaddleY = state.rightPaddleY;
  let newBallX = state.ballX;
  let newBallY = state.ballY;
  let username1 = state.username1;
  let username2 = state.username2;
  let newBallSpeedX = state.ballSpeedX;
  let newBallSpeedY = state.ballSpeedY;
  let leftScore = state.leftScore;
  let rightScore = state.rightScore;

  return {
    ...state,
    leftPaddleY: newLeftPaddleY,
    rightPaddleY: newRightPaddleY,
    ballX: newBallX,
    ballY: newBallY,
    ballSpeedX: newBallSpeedX,
    ballSpeedY: newBallSpeedY,
    leftScore,
    rightScore,
    username1,
    username2,
    };
  };


const resetBall = (isTotalEven: boolean): [number, number, number, number] => {
  return [
    CANVAS_WIDTH / 2 - BALL_SIZE / 2,
    CANVAS_HEIGHT / 2 - BALL_SIZE / 2,
    isTotalEven ? 0.6 : -0.6,
    0.4,
  ];
};