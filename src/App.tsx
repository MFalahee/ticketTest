import './App.scss';
import * as React from 'react';
import { Header, Ticket, Accordion } from './components/index';
import CssBaseline from '@mui/material/CssBaseline';
import sections from './files/sectionsData';

import { Grid } from '@mui/material';

function App() {
  let [sectionsData, setSectionsData] = React.useState(sections);
  return (
    <div className="App">
      <CssBaseline />
      <Grid container spacing={2} className="grid-container">
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
    </div>
  );
}

export default App;
