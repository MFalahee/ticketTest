import axios from "axios"

// https://concertsbucket.s3.amazonaws.com/aws+upload/
let apiURL = process.env.REACT_APP_IMAGE_URL || null

const getAPIPhotos = async (city) => {
  if (apiURL && city) {
    let data = axios.get(`${apiURL}/${city}`).then(
      (d) => {
        return d
      },
      (e) => {
        console.log(e)
        return "Fail"
      }
    )
    return data
  }
}

export default getAPIPhotos
/* import photos */
