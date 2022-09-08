import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  // TODO: route for each city w/ automatic auth?

  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='Glow'>
          <Route path=':city' element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

// reportWebVitals(console.log)
