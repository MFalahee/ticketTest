import * as React from 'react';
import photos from '../files/HQphotos.js';

interface ModalProps {
    index: number;
    onClose: () => void;
}

const PhotoModal : React.FC<ModalProps> = (props) => {
    const [photoIndex, setPhotoIndex] = React.useState(props.index);
    React.useEffect(() => {
        console.log('Modal loaded.');
        console.log('photoIndex', photoIndex);
    }, []);
        return(
            <div className="photo-modal">
                <img 
                    src={photos[photoIndex]}
                    className="photo-modal-img"
                    id="modal-img"
                    alt="modal-higher-res-photo"
                />
                <button className="photo-modal-close-button" onClick={() => props.onClose()}>
                    X
                </button>
            </div>
        )
}

export default PhotoModal;