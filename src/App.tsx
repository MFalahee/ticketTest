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
  const [sectionsData] = React.useState(sections);
  const modalRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
  }, []);

  return (
    <div className="App" id="app-container">
      <CssBaseline />
      <Crosshair />
      <div className="header-container">
      <Header />
      <Ticket />
      <div id="modal-div" 
      ref={modalRef}
      >
        {/* <PhotoModal index={0} onClose={() => {}} /> */}
      </div>
      </div>
      {/* <div className="spacer-div fixed-top" /> */}
      <Accordion sections={[...sectionsData]} modalRef={modalRef} />
      <Footer />
    </div>
  );
}

export default App;
