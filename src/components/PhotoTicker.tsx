import * as React from "react"
// import * as ReactDOM from 'react-dom';
// import { PhotoModal } from "./index";
import photoArr from "../files/photoImport.js"
import { PhotoTickerProps } from "../files/customTypes"
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined"

const delay: number = 5000
export default function PhotoTicker(props: PhotoTickerProps) {
  const [photoIndex, setPhotoIndex] = React.useState(1)
  // const [modalToggle, setModalToggle] = React.useState(false);
  // const [modalIndex, setModalIndex] = React.useState(0);
  const arrLength = photoArr.length
  const timeRef = React.useRef<NodeJS.Timeout>()
  React.useEffect(() => {
    // set initial active photos
    handlePhotoIndex(photoIndex, null)
  })
  const hookPhotos = React.useCallback(
    (newIndex: number) => {
      switch (newIndex) {
        case 0:
          document
            .getElementById(`img-${arrLength - 1}`)
            ?.classList.add("prev-photo")
          document
            .getElementById(`img-${newIndex + 1}`)
            ?.classList.add("next-photo")
          break
        case arrLength - 1:
          document
            .getElementById(`img-${newIndex - 1}`)
            ?.classList.add("prev-photo")
          document.getElementById(`img-${0}`)?.classList.add("next-photo")
          break
        default:
          document
            .getElementById(`img-${newIndex - 1}`)
            ?.classList.add("prev-photo")
          document
            .getElementById(`img-${newIndex + 1}`)
            ?.classList.add("next-photo")
          break
      }
    },
    [arrLength]
  )

  //adds .active-photo class to new index, and removes from previous active index
  // .active-photo is the center photo for desktop/tablet, and the only photo visible on mobile.
  const handlePhotoIndex = React.useCallback(
    (index: number, prevIndex: number | null) => {
      // reset tags
      if (prevIndex !== null) {
        const prevPhoto = document.getElementsByClassName("prev-photo")
        if (prevPhoto.length > 0) {
          prevPhoto[0].classList.remove("prev-photo")
        }
        const nextPhoto = document.getElementsByClassName("next-photo")
        if (nextPhoto.length > 0) {
          nextPhoto[0].classList.remove("next-photo")
        }
      }
      // setup if no prevIndex
      if (prevIndex === null) {
        document.getElementById(`img-${index}`)?.classList.add("active-photo")
        hookPhotos(index)
      } else {
        // onward if prevIndex exists
        let prevPhoto = document.getElementById(`img-${prevIndex}`)
        prevPhoto?.classList.toggle("active-photo")
        let activePhoto = document.getElementById(`img-${index}`)
        activePhoto?.classList.toggle("active-photo")
        hookPhotos(index)
        setPhotoIndex(index)
      }
    },
    [hookPhotos]
  )

  // for next button
  const handleNextPhoto = (e: React.MouseEvent) => {
    let nextIndex = photoIndex + 1
    if (nextIndex >= arrLength) {
      nextIndex = 1
    }
    handlePhotoIndex(nextIndex, photoIndex)
  }

  // on click for images to trigger modal
  const handlePhotoClick = (e: React.MouseEvent) => {
    const photoIndex = e.currentTarget.id.split("-")[1]
    // pause photo ticker when clicked
    if (timeRef.current) {
      clearTimeout(timeRef.current)
    }
    // show modal
    console.log("Photo ", photoIndex, " clicked.")
    // controls z-index
    props.modalRef.current?.classList.toggle("active-modal")
    // setModalIndex(Number(photoIndex));
    // setModalToggle(!modalToggle);
  }

  // const handlePhotoModalClose = () => {
  //   setModalToggle(false);
  //   props.modalRef.current?.classList.toggle('active-modal');
  // }

  function resetTimeout() {
    if (timeRef.current) {
      clearTimeout(timeRef.current)
    }
  }

  // function logParams(params: string[]) {
  //   console.log('===========================')
  //   params.forEach((e) => {
  //     console.log('=====', e, '======')
  //   })
  //   console.log('===========================')
  // }

  // function renderModal() {
  //   // let modalParams = [modalToggle.toString(), modalIndex.toString()]
  //   // logParams(modalParams)
  //   if (props.modalRef.current) {
  //     return(
  //     ReactDOM.createPortal(<PhotoModal visible={modalToggle} index={modalIndex} onClose={handlePhotoModalClose} />, props.modalRef.current)
  //     )
  //   }
  //   else console.error('Failed to render modal.')
  // }
  // auto progress slideshow of photos
  React.useEffect(() => {
    resetTimeout()
    timeRef.current = setTimeout(() => {
      switch (photoIndex) {
        case 0:
          handlePhotoIndex(1, 0)
          break
        case arrLength - 1:
          handlePhotoIndex(0, arrLength - 1)
          break
        default:
          handlePhotoIndex(photoIndex + 1, photoIndex)
          break
      }
    }, delay)
    return () => {
      resetTimeout()
    }
  }, [photoIndex, arrLength, handlePhotoIndex])
  // modal listener
  // React.useEffect(() => {
  //   if (modalToggle && props.modalRef.current) {
  //     console.log(props.modalRef.current);
  //   } else {
  //     return
  //   }
  // }, [modalToggle, props.modalRef]);

  return (
    <div className='custom-photo-ticker' id='cpt'>
      <button
        className='next-b'
        id={`next-button`}
        onClick={(e) => handleNextPhoto(e)}
      >
        <NavigateNextOutlinedIcon color={"inherit"} />
      </button>
      <div className='custom-photo-ticker-photo-container'>
        {photoArr?.map((photo, key) => {
          return (
            <div key={key} className='custom-photo-ticker-photo'>
              <img
                src={photo}
                className={`custom-photo-ticker-image`}
                id={`img-${key}`}
                alt=''
                onClick={(e) => handlePhotoClick(e)}
                onMouseOut={(e) => {
                  e.preventDefault()
                }}
              />
            </div>
          )
        })}
        {/* {(props.modalRef.current) ? renderModal() : null} */}
      </div>
    </div>
  )
}
