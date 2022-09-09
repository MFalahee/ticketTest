import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/glow'>
          <Route path='/:city' element={<App />} />
        </Route>
        <Route
          path='*'
          element={
            <div>
              <p>@@@ Page not found @@@</p>
              <img
                src={"./public/phlogo.png"}
                alt={
                  "elephante logo art that is basically a squiggly looking elephant - the dev"
                }
              />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

// reportWebVitals(console.log)
