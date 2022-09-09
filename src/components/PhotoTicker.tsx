import * as React from "react"
import { PhotoTickerProps } from "../files/customTypes"
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined"
import photoAPI from "../files/photoAPI"

const delay: number = 5000
export default function PhotoTicker(props: PhotoTickerProps) {
  const [photos, setPhotos] = React.useState([])
  const [photoIndex, setPhotoIndex] = React.useState(1)
  let arrLength = photos?.length
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

  function resetTimeout() {
    if (timeRef.current) {
      clearTimeout(timeRef.current)
    }
  }

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

  React.useEffect(() => {
    async function deliverPhotos() {
      const photos = await photoAPI(props?.city)
      if (photos != null) {
        console.log(photos)
        return photos
      }
    }
    deliverPhotos()
  }, [])

  return (
    <div className='custom-photo-ticker' id='cpt'>
      <button
        className='next-b'
        id={`next-button`}
        onClick={(e) => handleNextPhoto(e)}
      >
        <NavigateNextOutlinedIcon color={"inherit"} />
      </button>
      {/* <div className='custom-photo-ticker-photo-container'>
        {photoArr?.map((photo, key) => {
          return (
            <div key={key} className='custom-photo-ticker-photo'>
              <img
                src={photo}
                className={`custom-photo-ticker-image`}
                id={`img-${key}`}
                alt=''
                onMouseOut={(e) => {
                  e.preventDefault()
                }}
              />
            </div>
          )
        })}
      </div> */}
    </div>
  )
}
