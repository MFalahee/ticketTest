import "./stylesheet.scss";
import * as React from "react";
import {
  Header,
  Ticket,
  Accordion,
  Crosshair,
  Footer,
} from "./components/index";
import CssBaseline from "@mui/material/CssBaseline";
import sections from "./files/sectionsData";

import { Grid } from "@mui/material";

function App() {
  let [sectionsData, setSectionsData] = React.useState(sections);

  /* potentially use this to monitor scroll for crosshair animation */
  // window.addEventListener(
  //   "scroll",
  //   () => {
  //     document.body.style.setProperty(
  //       "--scroll",
  //       (
  //         window.scrollY /
  //         (document.body.offsetHeight - window.innerHeight)
  //       ).toString()
  //     );
  //   },
  //   false
  // );

  return (
    <div className="App" id="app-container">
      <CssBaseline />
      <Crosshair />
      <div className="header-container">
      <Header />
      <Ticket />
      </div>
      <div className="spacer-div fixed-top" />
      <Accordion sections={[...sectionsData]} />
      <Footer />
    </div>
  );
}

export default App;
