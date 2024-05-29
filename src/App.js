import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import DrawerAppBar from './components/homepage';
import Detectface from './components/detect-face';
import Abstract from './components/Abstract';
import Conclusion from './components/conclusion';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DrawerAppBar />} /> 
        <Route path="/detect-stress" element={<Detectface />} /> 
        <Route path="/abstract" element={<Abstract />} /> 
        <Route path="/conclusion" element={<Conclusion />} /> 
      </Routes>
    </Router>
  );
}

export default App;
