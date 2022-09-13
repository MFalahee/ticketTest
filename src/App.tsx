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
import photoAPI from "./files/photoAPI"

function App() {
  const [sectionsData] = React.useState(sections)
  const [photos, setPhotos] = React.useState(new Array(10).fill("placeholder"))
  const [params] = React.useState(useParams())
  const timeRef = React.useRef<NodeJS.Timeout>()
  const delay = 500

  function resetTimeout() {
    if (timeRef.current) {
      clearTimeout(timeRef.current)
    }
  }

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
    async function fetchPhotoURLs(city: string) {
      const apiResult = await photoAPI(city)
      if (apiResult && apiResult !== null && apiResult.keyArr !== null) {
        let output = apiResult.keyArr.map((element: string) => {
          return `${process.env.REACT_APP_IMGIX}/${element}?w=690&h=690&auto=format&q=60`
        })
        setPhotos(output)
      } else {
        console.log("no photos")
      }
    }
    if (params && params.city) fetchPhotoURLs(params.city)
    scrollListener()
  }, [params])

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
        {params !== null ? <Ticket city={params.city} /> : null}
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
}

export default App
