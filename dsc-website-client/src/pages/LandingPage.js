import React from 'react';

// Pages
import Home from './Home';
import Events from './Events';
import Team from './Team';
import PastEvents from './PastEvents';
import NavBar from './../components/Navbar';
import Footer from './../components/Footer';
import { makeStyles } from '@material-ui/core';

export default function LandingPage() {
  return (
    <>
      <NavBar />
      <Home />
      <Events />
      <PastEvents />
      <Team />
      <Footer />
    </>
  );
}
