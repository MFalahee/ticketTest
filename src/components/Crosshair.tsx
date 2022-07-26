import * as React from 'react';
import crosshairSVG from '../files/svgs/crosshair.svg';


export default function Crosshair() {
    return(
        <div className="crosshair-container">
        <img src={crosshairSVG} alt="crosshair" className="crosshair-image" />
        </div>
        
    )
}