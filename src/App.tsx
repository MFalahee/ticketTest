import "./stylesheet.scss"
import * as React from "react"
import {
  Header,
  Ticket,
  Accordion,
  Crosshair,
  StaticFooter,
  Footer,
} from "./components/index"
import CssBaseline from "@mui/material/CssBaseline"
import sections from "./files/sectionsData"
function App() {
  const [sectionsData] = React.useState(sections)
  const [scrollHeight, setScrollHeight] = React.useState<number>()
  const modalRef = React.createRef<HTMLDivElement>()
  const timeRef = React.useRef<NodeJS.Timeout>()
  const delay = 100

  function getDocHeight() {
    console.log(`
    ===== 
    doc  scrollHeight ${document.documentElement.scrollHeight} 
    body scrollHeight ${document.body.scrollHeight} \n
    doc  offsetHeight ${document.documentElement.offsetHeight}  
    body offsetHeight ${document.body.offsetHeight} \n
    doc  clientHeight ${document.documentElement.clientHeight}
    body clientHeight ${document.body.clientHeight}
    =====
    `)
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    )
  }

  function resetTimeout() {
    if (timeRef.current) {
      clearTimeout(timeRef.current)
    }
  }

  function scrollListener() {
    console.log("=== scrollListener FIRED ===")
    onscroll = (event) => {
      console.log(window.scrollY)
    }
    return
  }

  function resizeListener() {
    let w = window
    w.onresize = (e) => {
      console.log(e)
    }
    return
  }

  React.useEffect(() => {
    scrollListener()
    resizeListener()
  }, [scrollListener, resizeListener])

  React.useEffect(() => {
    console.log(getDocHeight())
    resetTimeout()
    timeRef.current = setTimeout(() => {
      console.log("=== setTimeout FIRED ===")
      console.log(document.scrollingElement)
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
      <StaticFooter />
    </div>
  )
}

export default App
