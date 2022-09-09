import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./index.css"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

const ErrorPage = () => {
  return (
    <div className='errorPageContainer'>
      <p>@@@ Page not found @@@</p>
      <img
        src={"phlogo.png"}
        alt={
          "elephante logo art that is basically a squiggly looking elephant - the dev"
        }
      />
    </div>
  )
}
root.render(
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
