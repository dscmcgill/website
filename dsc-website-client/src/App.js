import React from 'react';
import './App.css';

// Pages - Components
import LandingPage from './pages/LandingPage';
import themeFile from './util/theme';

// MUI
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const theme = createMuiTheme(themeFile);

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <LandingPage />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
