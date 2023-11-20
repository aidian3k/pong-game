import {FC} from "react";
import {BallProperties} from "../properties/ball.properties";

export const Ball: FC<{x: number, y: number}> = (props) => {
    return (
        <div className={'block black rounded-full m-0 bg-black absolute'}
             style={{width: `${BallProperties.BALL_WIDTH}px`, height: `${BallProperties.BALL_HEIGHT}px`, top: `${props.y}px`, left: `${props.x}px`}}>
        </div>
    )
}