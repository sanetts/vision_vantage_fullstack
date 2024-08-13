import React from 'react';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from './components/Home';

import Login from './components/Login';
import Register from './components/Register';
import History from './components/History';
import SkillDashboard from './components/SkillDashboard';
import Match from './components/Match';
import "./index.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/match" element={<Match />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/history" element={<History />} />
        <Route path="/skilldash" element={<SkillDashboard />} />
        <Route path="/match" element={<Match/>} />
      </Routes>
    </Router>
  );
};

 
export default App;
