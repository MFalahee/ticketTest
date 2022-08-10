import { render } from '@testing-library/react';
import * as React from 'react';
import photos from '../files/HQphotos.js';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

interface ModalProps {
    index: number;
    onClose: () => void;
    visible: boolean;
}

const PhotoModal : React.FC<ModalProps> = (props) => {
    const [photoIndex, setPhotoIndex] = React.useState(props.index);
    React.useEffect(() => {
    console.log('index loading: ', props.index);
    }, []);

    React.useEffect(() => {
        setPhotoIndex(props.index);
    }, [props.index])

    if (props.visible) {
        return(
            <div className="photo-modal">
                <img 
                    src={photos[photoIndex]}
                    className="photo-modal-img"
                    id="modal-img"
                    alt="modal-higher-res-photo"
                />
                <button className="photo-modal-close-button" onClick={() => props.onClose()}>
                    <CloseOutlinedIcon />
                </button>
            </div>
        )
    } else {
        return null;
    }
}

export default PhotoModal;