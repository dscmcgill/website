import React from 'react';

// Pages
import Home from './Home';
import Events from './Events';
import Team from './Team';
import PastEvents from './PastEvents'

export default function LandingPage() {
  return (
    <div>
      <Home />
      <Events />
      <PastEvents />
      <Team />
    </div>
  );
}
