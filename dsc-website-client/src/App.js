import React, { useEffect } from 'react';
import './App.css';

// Pages - Components
import LandingPage from './pages/LandingPage';
import themeFile from './util/theme';

// MUI
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

const theme = createMuiTheme(themeFile);

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <LandingPage />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
