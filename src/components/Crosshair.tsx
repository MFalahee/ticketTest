import * as React from 'react';
// import crosshairSVG from '../files/svgs/crosshair.svg';
import crosshairSplitSVG from '../files/svgs/crosshair-slice.svg';

export default function Crosshair() {
    return(
        <div className="crosshair-container">
        <img src={crosshairSplitSVG} alt="crosshair-left" className="crosshair-left" />
        <img src={crosshairSplitSVG} alt="crosshair-right" className="crosshair-right" />
        </div>
    )
}