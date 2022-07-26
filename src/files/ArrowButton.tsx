import * as React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SquareIcon from '@mui/icons-material/Square';


interface ArrowButtonProps {
    // todo: add props
    index: number;
    handleArrowClick: (index: number) => void;
}
const ArrowButton: React.FC<ArrowButtonProps> = (props) => {
    let temp = new Array(4).fill(0);
    return (
<div className="cas-square-icon-container" >
    {temp.map((e, i) => {
            return (
            <SquareIcon 
            key={i}
            className={`cas-square-${i}`} 
            />)
    })}
    <PlayArrowIcon className="cas-arrow" onClick={e => props.handleArrowClick(props.index)}/>
    </div>
    )
}

export default ArrowButton;