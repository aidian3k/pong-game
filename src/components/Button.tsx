import {FC} from "react";

export const Button: FC<{text: string, onClick: () => void}> = (props: {text: string, onClick: () => void}) => {
    return (
        <button className={'border border-indigo-400 text-center py-1 px-3 rounded-xl bg-gray-100 mt-1'} onClick={props.onClick}>
            <p className={'text-base text-black'}>{props.text}</p>
        </button>
    )
}