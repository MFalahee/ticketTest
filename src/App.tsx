import './stylesheet.scss';
import * as React from 'react';
import { Header, Ticket, Accordion, Crosshair, Footer } from './components/index';
import CssBaseline from '@mui/material/CssBaseline';
import sections from './files/sectionsData';

import { Grid } from '@mui/material';

function App() {
  let [sectionsData, setSectionsData] = React.useState(sections);
  
  window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', (window.scrollY / (document.body.offsetHeight - window.innerHeight)).toString());
  }, false);
  
  return (
    <div className="App" id="app-container">
      <CssBaseline />
      <Crosshair />
      <Grid container justifyContent="center" spacing={1} className="grid-container">
        <Grid item xs={12}>
          <Header />
            </Grid>
          <Grid item xs={12}>
            <Ticket />
          </Grid>
          <Grid item xs={12}>
            <Accordion sections={[...sectionsData]} />
          </Grid>
      </Grid>
    <Footer />
    </div>
  );
}

export default App;
