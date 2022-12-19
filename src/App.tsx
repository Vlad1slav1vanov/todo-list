import React from 'react';
import './style/style.scss';
import {observer} from 'mobx-react-lite'
import HomePage from './pages/HomePage';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import FormStore from "./store/FormStore";
import ListStore from "./store/ListStore";
import { leftMenu, bottomMenu } from "./store/MenuStore";
import {injectStores} from "@mobx-devtools/tools"

injectStores({
  FormStore,
  ListStore,
  leftMenu,
  bottomMenu
})

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
