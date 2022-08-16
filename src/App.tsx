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
  const modalRef = React.createRef<HTMLDivElement>();
  React.useEffect(() => {
  }, []);

  return (
    <div className="App" id="app-container">
      {/* <div ref={modalRef} id="modal-div"> </div> */}
      <CssBaseline />
      <Crosshair />
      <div className="header-container">
      <Header />
      <Ticket />
    
      </div>
      <Accordion sections={[...sectionsData]} modalRef={modalRef}/>
      <Footer />
    </div>
  );
}

export default App;
