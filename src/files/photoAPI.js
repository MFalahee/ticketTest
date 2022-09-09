// Make a call to backend which fetches the photo urls, then axios those in;
import axios from "axios"

const photoAPI = async (city) => {
  let l, j
  if (city) {
    try {
      if (process.env.NODE_ENV !== "production")
        l = `http://localhost:4001/aws/photos/${city}`
      else {
        l = `https://api.opposite.space/aws/photos/${city}`
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
