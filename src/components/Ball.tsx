import {FC} from "react";

export const Ball: FC<{x: number, y: number}> = (props) => {
    return (
        <div className={'block black rounded-full m-0 bg-black absolute'}
             style={{width: `30px`, height: '30px', top: `${props.y}px`, left: `${props.x}px`}}>
        </div>
    )
}