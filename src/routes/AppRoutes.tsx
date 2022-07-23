import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Character from '../pages/Character';
import Home from '../pages/Home';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character" element={<Character />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
