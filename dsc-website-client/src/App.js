import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import Team from './pages/Team';
import Events from './pages/Events';
import PastEvents from './pages/PastEvents';

// Components
import NavBar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/pastevents" component={PastEvents} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
