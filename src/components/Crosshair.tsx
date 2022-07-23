import * as React from 'react';
import SquareIcon from '@mui/icons-material/Square';

import CircleIcon from '@mui/icons-material/Circle';


const Crosshair = () => {
    return(
        <div className="crosshair">
            <div className="crosshair-inner">
                <SquareIcon className="crosshair-icon-0 ch-square" />
                <SquareIcon className="crosshair-icon-1 ch-square" />
                <CircleIcon className="crosshair-icon-2 ch-lgcircle" />
                <CircleIcon className="crosshair-icon-3 ch-lgcircle" />
                <CircleIcon className="crosshair-icon-4 ch-smcircle" />
                <CircleIcon className="crosshair-icon-5 ch-smcircle" />
                <CircleIcon className="crosshair-icon-6 ch-smcircle" />
                <CircleIcon className="crosshair-icon-7 ch-smcircle" />
            </div>
        </div>
    )
}

export default Crosshair;