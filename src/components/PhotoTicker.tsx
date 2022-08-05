import * as React from "react";
import * as ReactDOM from 'react-dom';
import { PhotoModal } from "./index";
import photoArr from "../files/photoImport.js";
import {PhotoTickerProps}from "../files/customTypes";

const delay: number = 5000;
export default function PhotoTicker(props: PhotoTickerProps) {
  const [photoIndex, setPhotoIndex] = React.useState(1);
  const [modalToggle, setModalToggle] = React.useState(false);
  const [modalIndex, setModalIndex] = React.useState(0);
  const arrLength = photoArr.length;
  const timeRef = React.useRef<NodeJS.Timeout>();
  React.useEffect(() => {
    // set initial active photos
    handlePhotoIndex(photoIndex, null);
  });
  const hookPhotos = React.useCallback(
    (newIndex: number) => {
      switch (newIndex) {
        case 0:
          document
            .getElementById(`img-${arrLength - 1}`)
            ?.classList.add("prev-photo");
          document
            .getElementById(`img-${newIndex + 1}`)
            ?.classList.add("next-photo");
          break;
        case arrLength - 1:
          document
            .getElementById(`img-${newIndex - 1}`)
            ?.classList.add("prev-photo");
          document.getElementById(`img-${0}`)?.classList.add("next-photo");
          break;
        default:
          document
            .getElementById(`img-${newIndex - 1}`)
            ?.classList.add("prev-photo");
          document
            .getElementById(`img-${newIndex + 1}`)
            ?.classList.add("next-photo");
          break;
      }
    },
    [arrLength]
  );

  //adds .active-photo class to new index, and removes from previous active index
  const handlePhotoIndex = React.useCallback(
    (index: number, prevIndex: number | null) => {
      // reset tags
      if (prevIndex !== null) {
        const prevPhoto = document.getElementsByClassName("prev-photo");
        if (prevPhoto.length > 0) {
          prevPhoto[0].classList.remove("prev-photo");
        }
        const nextPhoto = document.getElementsByClassName("next-photo");
        if (nextPhoto.length > 0) {
          nextPhoto[0].classList.remove("next-photo");
        }
      }
      // setup if no prevIndex
      if (prevIndex === null) {
        document.getElementById(`img-${index}`)?.classList.add("active-photo");
        hookPhotos(index);
      } else {
        // onward if prevIndex exists
        let prevPhoto = document.getElementById(`img-${prevIndex}`);
        prevPhoto?.classList.toggle("active-photo");
        let activePhoto = document.getElementById(`img-${index}`);
        activePhoto?.classList.toggle("active-photo");
        hookPhotos(index);
        setPhotoIndex(index);
      }
    },
    [hookPhotos]
  );

  const handleNextPhoto = (e: React.MouseEvent) => {
    let nextIndex = photoIndex + 1;
    if (nextIndex >= arrLength) {
      nextIndex = 1;
    }
    handlePhotoIndex(nextIndex, photoIndex);
  };

  // on click for images to trigger modal
  const handleImageModalOpen = (e: React.MouseEvent) => {
    const photoIndex = e.currentTarget.id.split("-")[1];
    // pause photo ticker when clicked
    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }
    // show modal
    setModalToggle(true);
    setModalIndex(Number(photoIndex));
    }


    const handleImageModalClose = () => {
      setModalToggle(false);
    }
  // on click for modal close button

  /* unused for now
  const handlePrevPhoto = (e: React.MouseEvent) => {
    let index = photoIndex;
    if (index === 0) {
      handlePhotoIndex(arrLength - 1, 0);
    } else {
      handlePhotoIndex(index - 1, index);
    }
  };
  */

  function resetTimeout() {
    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeRef.current = setTimeout(() => {
      switch (photoIndex) {
        case 0:
          handlePhotoIndex(1, 0);
          break;
        case arrLength - 1:
          handlePhotoIndex(0, arrLength - 1);
          break;
        default:
          handlePhotoIndex(photoIndex + 1, photoIndex);
          break;
      }
    }, delay);
    return () => {
      resetTimeout();
    };
  }, [photoIndex, arrLength, handlePhotoIndex]);
  // modal listener 
  React.useEffect(() => {
    if (modalToggle) {
      console.log('modal active');
      console.log(props.modalRef?.current);
      // add modalIndex as class to #modal-div to target specific photo
      // ReactDOM.render(<PhotoModal index={modalIndex} onClose={handleImageModalClose} />,document.getElementById('modal-div'));
      console.log('scrolling')
      // document.querySelector('#modal-div')?.scrollIntoView({
      //   behavior: 'smooth'
      // }); 
    } else {
      console.log('modal closed.')
    }
  }, [modalToggle]);
  /*
  const handlePhotoClick = () => {
    // opens a modal of the uncompressed photo
    // TODO
  };
  */

  return (
    <div className="custom-photo-ticker" id="cpt">
      <button
        className="next-b"
        id={`next-button`}
        onClick={(e) => handleNextPhoto(e)}
      >
        {" "}
        {">"}{" "}
      </button>
      <div className="custom-photo-ticker-photo-container">
        {photoArr?.map((photo, key) => {
          return (
            <div key={key} className="custom-photo-ticker-photo">
              <img
                src={photo}
                className={`custom-photo-ticker-image`}
                id={`img-${key}`}
                alt=""
                onClick={(e) => handleImageModalOpen(e)}
                onMouseOut={(e) => {
                  e.preventDefault();
                }}
              />
            </div>
          );
        })}
         
      </div>
    </div>
  );
}
