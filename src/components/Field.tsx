import {FC} from "react";
import {BoardProperties} from "../properties/board.properties";

export const Field: FC = () => {
    return (
        <div>
            <table className={'relative top-0 left-0'} style={{width: BoardProperties.BOARD_WIDTH, height: BoardProperties.BOARD_HEIGHT}}>
                <tbody>
                <tr>
                    <td className={'border-l-2 border-t-2 border-black'} style={{borderRight: '2px dashed black'}}></td>
                    <td className={'border-r-2 border-t-2 border-black'}></td>
                </tr>
                <tr>
                    <td className={'border-r-2 border-dashed border-black'}></td>
                    <td></td>
                </tr>
                <tr>
                    <td className={'border-r-2 border-dashed border-black'}></td>
                    <td></td>
                </tr>
                <tr>
                    <td className={'border-l-2 border-b-2 border-black'} style={{borderRight: '2px dashed black'}}></td>
                    <td className={'border-r-2 border-b-2 border-black'}></td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}