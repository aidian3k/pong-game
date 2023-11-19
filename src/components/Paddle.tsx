import {FC} from "react";

export const Paddle: FC<{x: number, y: number}> = (props) => {
    return (
        <div className={'bg-black absolute '} style={{width: '15px', height: '70px', left: `${props.x}px`, top: `${props.y}px`}}></div>
    )
}