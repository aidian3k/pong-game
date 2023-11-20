import {FC} from "react";
import {PaddleProperties} from "../properties/paddle.properties";

export const Paddle: FC<{x: number, y: number}> = (props) => {
    return (
        <div className={'bg-black absolute '} style={{width: `${PaddleProperties.PADDLE_WIDTH}px`, height: `${PaddleProperties.PADDLE_HEIGHT}px`, left: `${props.x}px`, top: `${props.y}px`}}></div>
    )
}