import { AudienceComments } from "./customTypes"
import SwitchCityName from "./switchCityName"
import axios from "axios"

async function getComments(cityIn: string | undefined) {
  const city = SwitchCityName(cityIn, "comment")
  let t: AudienceComments[] = []
  try {
    if (process.env.NODE_ENV !== "production") {
      await axios
        .get(`${process.env.REACT_APP_DEV_API}/comments/city/${city}`)
        .then((res) => {
          t = res.data.data
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      await axios
        .get(`https://${process.env.REACT_APP_API}/comments/city/${city}`)
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
  return t
}
export default getComments
