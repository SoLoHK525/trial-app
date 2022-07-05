import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import IndexPage from "./pages";
import AboutPage from './pages/about';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
