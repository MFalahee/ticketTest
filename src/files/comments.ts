import { AudienceComments } from "./customTypes"
import axios from "axios"

let local = `api.opposite.space/comments/city`
let productionKey = `${process.env.REACT_APP_API_BOO}`
async function getComments(city: string | undefined) {
  if (!city) city = "nyc"
  let t: AudienceComments[] = []
  try {
    if (process.env.NODE_ENV !== "production") {
      await axios
        .get(`http://${local}/${city}`)
        .then((res) => {
          t = res.data.data
        })
        .catch((err) => {
          console.log(err)
        })
    } else if (process.env.NODE_ENV === "production") {
      await axios
        .get(`https://${productionKey}/comments/${city}`)
        .then((res) => {
          t = res.data.data
        })
        .catch((err) => {
          console.log(err)
        })
    }
  } catch (err) {
    console.log(err)
  }
  console.log(t)
  return t
}
export default getComments
