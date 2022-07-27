import * as React from "react";
import photoArr from "../files/photoImport.js";

const delay: number = 2500;

export default function PhotoTicker() {
  const [photoIndex, setPhotoIndex] = React.useState(1);
  const [arrLength, setArrLength] = React.useState(photoArr.length);

  React.useEffect(() => {
    // set initial active photos
    handlePhotoIndex(photoIndex, null);
  }, []);

  //adds .active-photo class to new index, and removes from previous active index
  const handlePhotoIndex = (index: number, prevIndex: number | null) => {
    console.log("handlePhotoIndex");
    console.log(`index: ${index}`, `prevIndex: ${prevIndex}`);
    if (prevIndex === null) {
        // setup
        console.log('slider setup==========================');
        document.getElementById(`img-${index}`)?.classList.add("active-photo");
    } else {
      // reset classes on active/previous photos
      let prevPhoto = document.getElementById(`img-${prevIndex}`);
      console.log(prevPhoto)
      prevPhoto?.classList.toggle("active-photo");
      let activePhoto = document.getElementById(`img-${index}`);
      console.log(activePhoto)
      activePhoto?.classList.toggle("active-photo");
        // hook side photos
        hookPhotos(index);
      // purge prev/next photos from view as well
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
    if (photoIndex === 0) {
      handlePhotoIndex(arrLength - 1, 0);
    } else {
      handlePhotoIndex(photoIndex - 1, photoIndex);
    }
  };

  React.useEffect(() => {
    console.log('index set to:', photoIndex);
    // need to add side images to the left and right of the active photo
  }, [photoIndex]);

  const handlePhotoClick = () => {
    // opens a modal of the uncompressed photo
  };

  const hookPhotos = (newIndex: number) => {
    if (newIndex === 0) {
      document
        .getElementById(`img-${arrLength - 1}`)
        ?.classList.add("prev-photo");
      document
        .getElementById(`img-${newIndex + 1}`)
        ?.classList.add("next-photo");
    } else if (newIndex === arrLength - 1) {
      document
        .getElementById(`img-${newIndex - 1}`)
        ?.classList.add("prev-photo");
      document.getElementById(`img-${0}`)?.classList.add("next-photo");
    } else {
      document
        .getElementById(`img-${newIndex - 1}`)
        ?.classList.add("prev-photo");
      document
        .getElementById(`img-${newIndex + 1}`)
        ?.classList.add("next-photo");
    }
  };

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
