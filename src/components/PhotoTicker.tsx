import * as React from 'react';
import photoArr from '../files/photoImport.js';

export default function PhotoTicker() {
    return(
        <div className="custom-photo-ticker">
            {photoArr?.map((photo, key) => {
                return(
                    <div key={key} className="custom-photo-ticker-photo">
                        <img src={photo} alt="concert photo stub" className={`custom-photo-ticker-image img-${key}`}/>
                    </div>
                )
            }
            )}
        </div>
    )
}