import "./root.scss"
import * as React from "react"
import { useParams, useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "./files/useAuth"
import {
  Header,
  Ticket,
  Accordion,
  Crosshair,
  Footer,
} from "./components/index"
import CssBaseline from "@mui/material/CssBaseline"
import sections from "./files/sectionsData"
import SwitchCityName from "./files/switchCityName"
import axios from "axios"

function App() {
  const [sectionsData] = React.useState(sections)
  const [photos, setPhotos] = React.useState(new Array(10).fill("placeholder"))
  const [ticketURL, setTicketURL] = React.useState<string>("")
  const [params] = React.useState(useParams())
  const timeRef = React.useRef<NodeJS.Timeout>()
  const delay = 500
  const auth = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  function resetTimeout() {
    if (timeRef.current) {
      clearTimeout(timeRef.current)
    }
  }
  // this listens for scrolling on the document and changes footer class based on that.

  React.useEffect(() => {
    async function fetchTicket(city: string) {
      city = SwitchCityName(city, "ticket")
      let res = await axios.get(
        `${
          process.env.NODE_ENV === "production"
            ? process.env.REACT_APP_API
            : process.env.REACT_APP_DEV_API
        }/images/t/${city}`
      )
      if (res.status === 200) {
        setTicketURL(res.data.data)
      }
    }

    async function fetchPhotoURLs(city: string) {
      const apiResult = await axios.get(
        `${
          process.env.NODE_ENV === "production"
            ? process.env.REACT_APP_API
            : process.env.REACT_APP_DEV_API
        }/images/p/${city}`
      )
      if (apiResult && apiResult !== null) {
        setPhotos(apiResult.data.urls)
      } else {
        console.log("no photos")
      }
    }
    if (params && params.city) {
      fetchPhotoURLs(params.city)
      fetchTicket(params.city)
    }
  }, [params])
  React.useEffect(() => {
    resetTimeout()
    timeRef.current = setTimeout(() => {
      let t = document.getElementById("in-need-of-redirect")
      if (
        t !== null &&
        t.classList.contains("active") &&
        !auth.token &&
        !auth.user
      ) {
        navigate("/", { replace: true })
      }
    }, delay)
    return () => {
      resetTimeout()
    }
  })

  React.useEffect(() => {})

  if (auth.token && auth.concerts) {
    let loc = location.pathname.split("/")[2]
    if (auth.user === "Moo" || auth.concerts.includes(loc))
      return (
        <div className='App' id='app-container'>
          <CssBaseline />
          <Crosshair />
          <div className='header-container'>
            <Header />
            {params !== null ? (
              <Ticket city={params.city} ticketURL={ticketURL} />
            ) : null}
          </div>
          {params !== null ? (
            <Accordion
              city={params.city}
              sections={[...sectionsData]}
              photos={[...photos]}
            />
          ) : null}
          <Footer />
        </div>
      )
    else {
      return <div id='in-need-of-redirect' className='active'></div>
    }
  } else {
    return <div id='in-need-of-redirect' className='active'></div>
  }
}

export default App
