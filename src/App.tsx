import "./stylesheet.scss"
import * as React from "react"
import {
  Header,
  Ticket,
  Accordion,
  Crosshair,
  Footer,
} from "./components/index"
import CssBaseline from "@mui/material/CssBaseline"
import sections from "./files/sectionsData"
function App() {
  const [sectionsData] = React.useState(sections)
  const modalRef = React.createRef<HTMLDivElement>()
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
    scrollListener()
  }, [])

  React.useEffect(() => {
    resetTimeout()
    timeRef.current = setTimeout(() => {
      // check for resize?
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
      {/* <div ref={modalRef} id="modal-div"> </div> */}
      <CssBaseline />
      <Crosshair />
      <div className='header-container'>
        <Header />
        <Ticket />
      </div>

      <Accordion sections={[...sectionsData]} modalRef={modalRef} />
      <Footer />
    </div>
  )
}

export default App
