import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { ProvideAuth } from "./files/useAuth"
import "./index.css"
import { Login } from "./components/index"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
const ErrorPage = () => {
  return (
    <div className='errorPageContainer'>
      <p>PNF - 403</p>
      <Link to='/'>
        <img
          src={"phlogo.png"}
          alt={
            "elephante logo art that is a squiggly looking elephant face in black and white"
          }
        />
      </Link>
    </div>
  )
}
root.render(
  <ProvideAuth>
    <Router>
      <Routes>
        <Route path='hgtour'>
          <Route path=':city' element={<App />} />
        </Route>
        <Route path='/' element={<Login />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  </ProvideAuth>
)
