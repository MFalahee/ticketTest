import { jsx } from "@emotion/react";
import * as React from "react";
import photoArr from "../files/photoImport.js";

const delay: number = 5000;

export default function PhotoTicker() {
  const [photoIndex, setPhotoIndex] = React.useState(1);
  const [arrLength, setArrLength] = React.useState(photoArr.length);

  const timeRef = React.useRef<NodeJS.Timeout>();
  React.useEffect(() => {
    // set initial active photos
    handlePhotoIndex(photoIndex, null);
  }, []);

  //adds .active-photo class to new index, and removes from previous active index
  const handlePhotoIndex = (index: number, prevIndex: number | null) => {
    console.log(`index: ${index}`, `prevIndex: ${prevIndex}`);
    // reset tags
    if (prevIndex !== null) { 
      const prevPhoto = document.getElementsByClassName('prev-photo');
      if (prevPhoto.length > 0) {
        prevPhoto[0].classList.remove('prev-photo');
      }
      const nextPhoto = document.getElementsByClassName('next-photo');
      if (nextPhoto.length > 0) {
        nextPhoto[0].classList.remove('next-photo');
      }
    }

    if (prevIndex === null) {
        document.getElementById(`img-${index}`)?.classList.add("active-photo");
        hookPhotos(index)
    } else {

      let prevPhoto = document.getElementById(`img-${prevIndex}`);
      prevPhoto?.classList.toggle("active-photo");
      let activePhoto = document.getElementById(`img-${index}`);
      activePhoto?.classList.toggle("active-photo");
      hookPhotos(index)
      console.log("Setting index:", index);
      setPhotoIndex(index);
    }
  };

  const handleNextPhoto = (e: React.MouseEvent) => {
    console.log("handleNextPhoto");
    let nextIndex = photoIndex + 1;
    if (nextIndex >= arrLength) {
      nextIndex = 1;
    }
    handlePhotoIndex(nextIndex, photoIndex);
  };

  const handlePrevPhoto = (e: React.MouseEvent) => {
    let index = photoIndex;
    if (index === 0) {
      handlePhotoIndex(arrLength - 1, 0);
    } else {
      handlePhotoIndex(index - 1, index);
    }
  };
  
  function resetTimeout() {
    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeRef.current = setTimeout(
      () => {
        switch (photoIndex) {
          case 0:
            handlePhotoIndex(1, 0);
            break;
           case arrLength - 1:
            handlePhotoIndex(0, arrLength - 1)
            break;
            default: 
            handlePhotoIndex(photoIndex + 1, photoIndex);
            break;
        }
      },
      delay
    )
      return () => {
        resetTimeout();
      }
  }, [photoIndex]);

  const handlePhotoClick = () => {
    // opens a modal of the uncompressed photo
    // TODO
  };

  const hookPhotos = (newIndex: number) => {
    switch (newIndex) {
    case 0:
      document.getElementById(`img-${arrLength - 1}`)?.classList.add("prev-photo");
      document.getElementById(`img-${newIndex + 1}`)?.classList.add("next-photo");
      break;
    case arrLength - 1:
      document.getElementById(`img-${newIndex - 1}`)?.classList.add("prev-photo");
      document.getElementById(`img-${0}`)?.classList.add("next-photo");
      break;
    default:
      document.getElementById(`img-${newIndex - 1}`)?.classList.add("prev-photo");
      document.getElementById(`img-${newIndex + 1}`)?.classList.add("next-photo");
      break;
    }
  }

  return (
    <div className="custom-photo-ticker">
      <button
        className="prev-b"
        id={`prev-button`}
        onClick={(e) => handlePrevPhoto(e)}
      >
        {" "}
        {"<"}{" "}
      </button>
      <button
        className="next-b"
        id={`next-button`}
        onClick={(e) => handleNextPhoto(e)}
      >
        {" "}
        {">"}{" "}
      </button>
      {photoArr?.map((photo, key) => {
        return (
          <div key={key} className="custom-photo-ticker-photo">
            <img
              src={photo}
              alt="concert photo stub"
              className={`custom-photo-ticker-image`}
              id={`img-${key}`}
            />
          </div>
        );
      })}
    </div>
  );
}
