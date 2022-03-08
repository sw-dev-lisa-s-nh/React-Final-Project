import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Gigs  from './components/gigs';
import Users  from './components/users';
import Instruments  from './components/instruments';
import Navigation from './components/navLinks';
import HomePage from './components/home';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={ <HomePage />} />
        <Route path="/users" element={ <Users />} />
        <Route path="/instruments" element={ <Instruments />} />
        <Route path="/gigs" element={ <Gigs />} />
      </Routes>
    </div>
  );
}

export default App;