import React from 'react';

// Pages
import Home from './Home';
import Events from './Events';
import Team from './Team';
import PastEvents from './PastEvents';
import NavBar from './../components/Navbar';
import Footer from './../components/Footer';

export default function LandingPage() {
  return (
    <div>
      <NavBar />
      <Home />
      <Events />
      <PastEvents />
      <Team />
      <Footer />
    </div>
  );
}
