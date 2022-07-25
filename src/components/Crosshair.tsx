import * as React from 'react';
import crosshairSVG from '../files/svgs/crosshair.svg';


const Crosshair = () => {
    return(
        <div className="crosshair-container">
        <img src={crosshairSVG} alt="crosshair" className="crosshair-image" />
        </div>
        
    )
}

export default Crosshair;