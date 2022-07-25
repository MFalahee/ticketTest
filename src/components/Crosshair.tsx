import * as React from 'react';
import crosshairSVG from '../files/svgs/crosshair.svg';


const Crosshair = () => {
    return(
        <div className="crosshair">
            <div className="crosshair-inner">
                <img className="crosshair-svg" src={crosshairSVG} alt="crosshair"/>
            </div>
        </div>
    )
}

export default Crosshair;