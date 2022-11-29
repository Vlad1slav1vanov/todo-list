import React from 'react';
import './style/style.scss';
import {observer} from 'mobx-react-lite'
import HomePage from './pages/HomePage';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default observer(App);
