import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import Create from './pages/Create.jsx';

import {BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import './index.css'
import PageNotFound from './pages/Pagenotfound.jsx';
import Canvas from './pages/Canvas.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/create' element={<Create />} />
        <Route path='/finish' element={<Canvas />} />
        <Route path='/404' element={<PageNotFound/>} />
        <Route path='*' element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
);
