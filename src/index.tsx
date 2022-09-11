import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import "./index.css"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

const ErrorPage = () => {
  return (
    <div className='errorPageContainer'>
      <p>Page not found</p>
      <img
        src={"phlogo.png"}
        onClick={()=> window.open('http://www.elephantemusic.com/')}
        alt={
          "elephante logo art that is basically a squiggly looking elephant - the dev"
        }
      />
    </div>
  )
}
root.render(
  // This will have to be changed to be a central landing point and then a redirect based on Auth. It's not working on
  // the hosted version.

  // reformatting this into App might fix that? I'm pretty sure that could help.
  <Router>
    <Routes>
      <Route path='glow'>
        <Route path=':city' element={<App />} />
      </Route>
      <Route path='home' />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  </Router>
)

// reportWebVitals(console.log)
