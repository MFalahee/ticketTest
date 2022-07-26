import * as React from 'react';

interface PhotoTickerProps {
    photos: Array<string>;
}

export default function PhotoTicker(props: PhotoTickerProps) {
    return(
        <div className="custom-photo-ticker">
            {props.photos.map((photo, key) => {
                return(
                    <div key={key} className="custom-photo-ticker-photo">
                        <img src={photo} alt="concert photo stub" className="custom-photo-ticker-image"/>
                    </div>
                )
            }
            )}
        </div>
    )
}