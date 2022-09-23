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
  let maxAge = 100000
  let expires = new Date().getUTCDate()
  let url = process.env.REACT_APP_API

  if (process.env.NODE_ENV !== "production") {
    url = "http://localhost:4001"
  }

  const signin = async (email) => {
    const result = await axios
      .post(`${url}/login?email=${email}`)
      .then((response) => {
        return response.data
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
      if (result.request.status === 206) {
        console.log("Multi-concert user")
      }
      let city = eventNum(result.redirect)
      document.cookie = `token=${result.data};max_age=${maxAge};secure;samesite=none;expires=${expires}`
      let pathname = `/hgtour/${city}`
      let navOptions = { replace: true, state: "fromLogin" }
    }
  }
  const checkToken = async (tokenInput) => {
    if (!tokenInput) {
      return `Must provide a token to check.`
    } else {
      const check = await axios.post(`${url}/checktoken`, {
        Headers: { Authorization: `${tokenInput}` },
      })
      return check
    }
  }
  const redirectWithAuth = () => {}

  React.useEffect(() => {
    let cookie
    if (!token) cookie = getCookie("token")
    async function checkIfValidCookie() {
      const result = await checkToken(cookie)
      console.log(result)
    }
    if (cookie) checkIfValidCookie()
  }, [])
  // Return the user object and auth methods
  return {
    user,
    token,
    signin,
    checkToken,
    redirectWithAuth,
  }
}
