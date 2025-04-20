import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SkillListPage from './pages/SkillListPage';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/skills' element={<SkillListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
