import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './game.css';
import Home from './pages/Home';
import Resources from './pages/Resources';
import Games from './pages/Games';
import {
  HashRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

const router = (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recursos" element={<Resources />} />
      <Route path="/juegos" element={<Games />} />
      <Route path="/home" element={<Home />} />
      <Route path="/foreveryoung" element={<Home />} />
      <Route path="/foreveryoung/home" element={<Home />} />
      <Route path="*" element={<Home />} />
    </Routes>
  </Router>
);

ReactDOM.render(router, document.getElementById('root'));