import "./stylesheet.scss"
import * as React from "react"
import { useParams } from "react-router-dom"
import {
  Header,
  Ticket,
  Accordion,
  Crosshair,
  Footer,
} from "./components/index"
import CssBaseline from "@mui/material/CssBaseline"
import sections from "./files/sectionsData"

let cityString = {
  atlanta: "atlanta",
  boston: "boston",
  chicago: "chicago",
  dallas: "dallas",
  dc: "dc",
  houston: "houston",
  losangeles: "losangeles",
  nyc: "nyc",
  portland: "portland",
  sanfrancisco: "sanfrancisco",
  seattle: "seattle",
}

let concertString = {
  atlanta: "atlanta",
  boston: "boston",
  charlestonTrio: "charlestonTrio",
  chicago: "chicago",
  dallas: "dallas",
  dc: "dc",
  denver: "denver",
  fortLauderdale: "fortLauderdale",
  honolulu: "honolulu",
  houston: "houston",
  kansasCity: "kansasCity",
  la: "la",
  nyc: "nyc",
  philly: "philly",
  portland: "portland",
  sacramento: "sacramento",
  sanMarcos: "sanMarcos",
  seattle: "seattle",
  sf: "sf",
}

function App(props: { city?: string }) {
  const [sectionsData] = React.useState(sections)
  const timeRef = React.useRef<NodeJS.Timeout>()
  const delay = 500
  const { city } = useParams()
  function resetTimeout() {
    if (timeRef.current) {
      clearTimeout(timeRef.current)
    }
  }

  function startAWS() {}

  // this listens for scrolling on the document and changes footer class based on that.
  function scrollListener() {
    // need to reset these on resize!
    onscroll = () => {
      let heightD
      let docHeight = document.scrollingElement?.scrollHeight
      let toggleTarget = document.getElementById("moving-footer")

      if (docHeight) {
        heightD = docHeight - window.innerHeight
      }
      if (heightD && window.scrollY >= heightD) {
        let target = document.getElementById("static-footer")
        if (
          target &&
          document.scrollingElement &&
          !toggleTarget?.classList.contains("footer-at-bottom")
        ) {
          document.scrollingElement.scrollTop = target.offsetTop
          toggleTarget?.classList.toggle("footer-at-bottom")
        }
      } else {
        if (toggleTarget?.classList.contains("footer-at-bottom"))
          toggleTarget.classList.remove("footer-at-bottom")
      }
    }
  }

  React.useEffect(() => {
    scrollListener()
  }, [])

  React.useEffect(() => {
    resetTimeout()
    timeRef.current = setTimeout(() => {
      window.onresize = () => {
        scrollListener()
      }
    }, delay)
    return () => {
      resetTimeout()
    }
  }, [])

  return (
    <div className='App' id='app-container'>
      <CssBaseline />
      <Crosshair />
      <div className='header-container'>
        <Header />
        {city ? <Ticket city={city} /> : null}
      </div>
      <Accordion city={city} sections={[...sectionsData]} />
      <Footer />
    </div>
  )
}

export default App
