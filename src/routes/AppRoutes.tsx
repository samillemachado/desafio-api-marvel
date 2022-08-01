import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Comics from '../pages/Comics';
import MyCollection from '../pages/MyCollection';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mycollection" element={<MyCollection />} />
        <Route path="/comics" element={<Comics />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
