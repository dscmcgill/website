import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Pages
import LandingPage from './pages/LandingPage';
import Contact from './pages/Contact';
import PastEvents from './pages/PastEvents';
import Faq from './pages/Faq';
import Team from './pages/Team';

// Components
import NavBar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/faq" component={Faq} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/pastevents" component={PastEvents} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
