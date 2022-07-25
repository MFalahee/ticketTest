import './stylesheet.scss';
import * as React from 'react';
import { Header, Ticket, Accordion, Crosshair } from './components/index';
import CssBaseline from '@mui/material/CssBaseline';
import sections from './files/sectionsData';

import { Grid } from '@mui/material';

function App() {
  let [sectionsData, setSectionsData] = React.useState(sections);

  return (
    <div className="App" id="app-container">
      <CssBaseline />
      <Grid container justifyContent="center" spacing={1} className="grid-container">
        <Grid item xs={12}>
          <Header />
            </Grid>
          <Grid item xs={8}>
            <Ticket />
          </Grid>
          <Grid item xs={12}>
            <Accordion sections={[...sectionsData]} />
          </Grid>
          
      </Grid>
      <Crosshair />
    </div>
  );
}

export default App;
