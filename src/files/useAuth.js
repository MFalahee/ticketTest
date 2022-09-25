import * as React from "react"
import * as axios from "axios"
import { getCookie } from "./getCookie"
import eventNum from "./eventNum"

const authContext = React.createContext()

export function ProvideAuth({ children }) {
  const auth = useProvideAuth()
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}
// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return React.useContext(authContext)
}
// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [token, setToken] = React.useState(null)
  const [user, setUser] = React.useState(null)
  const [concerts, setConcerts] = React.useState([])
  let maxAge = 100000
  let expires = new Date().getUTCDate()
  let url = process.env.REACT_APP_API

  if (process.env.NODE_ENV !== "production") {
    url = "http://localhost:4001"
  }

  const signin = async (email) => {
    // console.log("auth signin", email)
    const result = await axios
      .post(`${url}/login?email=${email}`)
      .then((response) => {
        return response
      })
      .catch((error) => {
        return error.request.status
      })
    if (typeof result === "number") {
      // error occurred
      switch (result) {
        case 404:
          console.log("Unable to find your email in the database.")
          return "Unable to find your email in the database."
        case 500:
          console.log("Internal error occurred, sorry for the inconvenience.")
          return "Internal error occurred, sorry for the inconvenience."
        default:
          console.log("Unable to process your request. Please try again.")
          return "Unable to process your request. Please try again."
      }
    } else {
      if (result && result.status === 206) {
        setUser("Moo")
        return "Multi-concert user-"
      }
      document.cookie = `token=${result.data.data};max_age=${maxAge};secure;samesite=none;expires=${expires}`
      setToken(result.data.data)
      setConcerts([eventNum(result.data.redirect)])
      return result.data.redirect
    }
  }
  const checkToken = async (tokenInput) => {
    if (!tokenInput) {
      return `Must provide a token to validate.`
    } else {
      const checkIfValid = await axios
        .post(`${url}/checktoken?token=${tokenInput}`)
        .then((response) => {
          return response
        })
      return checkIfValid
    }
  }

  React.useEffect(() => {
    // checks cookie on load
    let cookie
    if (!token) cookie = getCookie("token")
    async function checkIfValidCookie() {
      const result = await checkToken(cookie)
      if (result && result.status === 200) {
        setToken(result.data.data.token)
        setUser(result.data.data.user)
        setConcerts([eventNum(result.data.data.guestbook_event_id)])
      }
    }
    if (cookie) checkIfValidCookie()
  })

  // Return the user object and auth methods
  return {
    user,
    token,
    concerts,
    signin,
    checkToken,
  }
}
