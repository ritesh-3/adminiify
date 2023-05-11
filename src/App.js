import { ColorModeContext, useMode } from './theme';
import { Routes, Route } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import Dashboard from './scenes/dashboard';
import Team from './scenes/team';
import Invoices from './scenes/invoices';
// import Bar from './scenes/bar';
import Contacts from './scenes/contacts';
// import Form from './scenes/form';
// import Line from './scenes/line';
// import Pie from './scenes/pie';
// import FAQ from './scenes/faq';
// import Geoghraphy from './scenes/geography';
// import Calendar from './scenes/calendar';

import './App.css';


function App() {

  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode} >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          <Sidebar/>
          <main className='content'>
            <Topbar />
            <Routes >
              <Route path='/' element={<Dashboard />} />
              <Route path='/team' element={<Team />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/invoices' element={<Invoices />} />
              {/* <Route path='/bar' element={<Bar />} /> */}
              {/* <Route path='/form' element={<Form />} /> */}
              {/* <Route path='/pie' element={<Pie />} /> */}
              {/* <Route path='/line' element={<Line />} /> */}
              {/* <Route path='/faq' element={<FAQ />} /> */}
              {/* <Route path='/geography' element={<Geoghraphy />} /> */}
              {/* <Route path='/calendar' element={<Calendar />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
