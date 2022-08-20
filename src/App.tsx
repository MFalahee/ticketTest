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
import { ConstructionOutlined } from "@mui/icons-material"
function App() {
  const [sectionsData] = React.useState(sections)
  const [scrollHeight, setScrollHeight] = React.useState<number>()
  const modalRef = React.createRef<HTMLDivElement>()
  const timeRef = React.useRef<NodeJS.Timeout>()
  const delay = 500

  function resetTimeout() {
    if (timeRef.current) {
      clearTimeout(timeRef.current)
    }
  }
  // window.pageYOffset === window.scrollY
  function scrollListener() {
    console.log(`window.innerHeight: ${window.innerHeight} \n`)
    console.log(`window.scrollY: ${window.scrollY} \n`)
    onscroll = (event) => {
      let currentPixelHeight = window.scrollY
      // target should be last accordion piece? we want a threshold.
      let target = document.getElementById("static-footer")
      console.log(target?.offsetTop)
      console.log(Math.round((window.scrollY / window.innerHeight) * 100))
    }
    return
  }

  // function resizeListener() {
  //   let w = window
  //   w.onresize = (e) => {
  //   }
  //   return
  // }

  React.useEffect(() => {
    scrollListener()
  }, [scrollListener])

  React.useEffect(() => {
    resetTimeout()
    timeRef.current = setTimeout(() => {}, delay)
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
