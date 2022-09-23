// Make a call to backend which fetches the photo urls, then axios those in;
import axios from "axios"

const photoAPI = async (city) => {
  let l, j
  if (city) {
    try {
      if (process.env.NODE_ENV !== "production")
        l = `${process.env.REACT_APP_DEV_API}/aws/photos/${city}`
      // l = `${hosted}/${city}`
      else {
        l = `${process.env.REACT_APP_API}/aws/photos/${city}`
      }
      j = await axios.get(l).then(
        (res) => {
          return res.data
        },
        (error) => {
          console.log(error)
        }
      )
      return j
    } catch (err) {
      console.log(err)
    }
  }
}

export default photoAPI
