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
function App() {
  const [sectionsData, setSections] = React.useState(sections);
  React.useEffect(() => {
  }, []);
  return (
    <div className="App" id="app-container">
      <CssBaseline />
      <Crosshair />
      <div className="header-container">
      <Header />
      <Ticket />
      </div>
      {/* <div className="spacer-div fixed-top" /> */}
      <Accordion sections={[...sectionsData]} />
      <Footer />
    </div>
  );
}

export default App;
