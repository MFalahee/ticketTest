import { AudienceComments } from "./customTypes"
import SwitchCityName from "./switchCityName"
import axios from "axios"

let local = `http://localhost:4001/comments/city`
let productionKey = `${process.env.REACT_APP_API_BOO}`
async function getComments(cityIn: string | undefined) {
  const city = SwitchCityName(cityIn, "comment")
  let t: AudienceComments[] = []
  try {
    if (process.env.NODE_ENV !== "production") {
      console.log("getcomments", process.env.NODE_ENV, city)
      await axios
        .get(`${local}/${city}`)
        .then((res) => {
          t = res.data.data
        })
        .catch((err) => {
          console.log(err)
        })
    } else if (process.env.NODE_ENV === "production") {
      await axios
        .get(`https://${productionKey}/comments/city/${city}`)
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
