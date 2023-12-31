import React, {FC, useEffect, useState} from "react";
import {TimeCounter} from "../components/TimeCounter";
import {Ball} from "../components/Ball";
import {Paddle} from "../components/Paddle";
import {Field} from "../components/Field";
import {Button} from "../components/Button";
import {Score} from "../components/Score";
import {BoardProperties} from "../properties/board.properties";
import {BallProperties} from "../properties/ball.properties";
import {PaddleProperties} from "../properties/paddle.properties";

export const PongGame: FC = () => {
    const [score, setScore] = useState<{leftPlayer: number, rightPlayer: number}>({leftPlayer: 0, rightPlayer: 0})
    const [isPaused, setIsPaused] = useState<boolean>(false);
    const [seconds, setSeconds] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [rightY, setRightY] = useState<number>(BoardProperties.BOARD_HEIGHT / 2);
    const [leftY, setLeftY] = useState<number>(BoardProperties.BOARD_HEIGHT / 2);
    const [ballPosition, setBallPosition] = useState<{x: number, y: number, dx:number, dy: number}>({x: BoardProperties.BOARD_WIDTH / 2 - BallProperties.BALL_WIDTH / 2, y: BoardProperties.BOARD_HEIGHT / 2, dx: 2, dy: 2});

    useEffect(() => {
        let timeOut = setInterval(() => {
            if(isPaused) {
                return;
            }

            if(seconds + 1 === 60) {
                setSeconds(0);
                setMinutes((minutes: number) => minutes + 1);
                return;
            }

            setSeconds((seconds: number) => seconds + 1);
        }, 1000);

        return () => clearTimeout(timeOut);
    }, [seconds, isPaused]);

    useEffect(() => {
        if(isPaused) {
            return;
        }

        const pongGameLoop = () => {
            if (ballPosition.y >= leftY && ballPosition.y <= leftY + PaddleProperties.PADDLE_HEIGHT && ballPosition.x <= BallProperties.BALL_WIDTH) {
                ballPosition.dx *= -1;
            } else if(ballPosition.x <= 0 && ballPosition.y > 150 && ballPosition.y < 350) {
                ballPosition.dx *= -1;
                setScore({...score, rightPlayer: score.rightPlayer + 1});
            } else if (ballPosition.x <= 0) {
                ballPosition.dx *= -1;
            }

            if ((ballPosition.y >= rightY && ballPosition.y <= rightY + PaddleProperties.PADDLE_HEIGHT) && ballPosition.x >= BoardProperties.BOARD_WIDTH - (PaddleProperties.PADDLE_WIDTH + BallProperties.BALL_WIDTH)) {
                ballPosition.dx *= -1;
            } else if(ballPosition.x >= BoardProperties.BOARD_WIDTH - BallProperties.BALL_WIDTH && ballPosition.y > 150 && ballPosition.y < 350) {
                ballPosition.dx *= -1;
                setScore({...score, leftPlayer: score.leftPlayer + 1});
            } else if (ballPosition.x >= BoardProperties.BOARD_WIDTH - BallProperties.BALL_WIDTH) {
                ballPosition.dx *= -1;
            }

            if (ballPosition.y <= BallProperties.BALL_HEIGHT) {
                ballPosition.dy *= -1;
            }

            if (ballPosition.y >= BoardProperties.BOARD_HEIGHT - BallProperties.BALL_HEIGHT) {
                ballPosition.dy *= -1;
            }

            setBallPosition({...ballPosition, x: ballPosition.x + ballPosition.dx, y: ballPosition.y + ballPosition.dy})
        }

        const gameInterval = setInterval(pongGameLoop, 10)

        return () => {
            clearInterval(gameInterval)
        }
    }, [ballPosition, leftY, rightY, isPaused, score]);

    useEffect(() => {
        const wKeyNumber: number = 87;
        const sKeyNumber: number = 83;
        const upArrowKeyNumber: number = 38;
        const downArrowKeyNumber: number = 40;

        const keyClicked = (event: any) => {
            const currentKeyClicked = event.which;

            if(isPaused) {
                return;
            }

            if (currentKeyClicked === sKeyNumber && leftY !== 460) {
                setLeftY(leftY + 10);
            } else if(currentKeyClicked === wKeyNumber && leftY !== 30) {
                setLeftY(leftY - 10);
            } else if(currentKeyClicked === upArrowKeyNumber && rightY !== 30) {
                setRightY(rightY - 10)
            } else if(currentKeyClicked === downArrowKeyNumber && rightY !== 460) {
                setRightY(rightY + 10);
            }
        }

        document.addEventListener('keydown', keyClicked);

        return () => document.removeEventListener('keydown', keyClicked);
    }, [leftY, rightY, isPaused])

    function restartPongGame(): void {
        setMinutes(0);
        setSeconds(0);
        setBallPosition({x: 235, y:250, dx: 2, dy: 2})
        setRightY(250);
        setLeftY(250);
        setIsPaused(false);
        setScore({leftPlayer: 0, rightPlayer: 0})
    }

    return (
        <div className={'flex justify-center items-center'}>
            <div className={'relative'}>
                <div className={'absolute -translate-x-1/2'}>
                    <div className={'flex justify-end mr-2 mt-1'}>
                        <TimeCounter seconds={seconds} minutes={minutes}/>
                    </div>
                    <div>
                        <Field/>
                        <Ball x={ballPosition.x} y={ballPosition.y}/>
                        <Paddle x={0} y={leftY}/>
                        <Paddle x={485} y={rightY}/>
                    </div>
                    <div className={'flex justify-between'}>
                        <Button text={isPaused ? 'Resume' : 'Pause'} onClick={() => setIsPaused(!isPaused)}/>
                        <div className={'flex justify-center items-center'}>
                            <Score leftPlayer={score.leftPlayer} rightPlayer={score.rightPlayer}/>
                        </div>

                        <Button text={'Restart'} onClick={restartPongGame}/>
                    </div>
                </div>
            </div>
        </div>
    )
}