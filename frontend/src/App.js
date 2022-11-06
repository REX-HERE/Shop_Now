import React, {useState} from "react";

import { LogInfo } from './constants/constant_vals';
import {Routes, Route, Link} from 'react-router-dom';
import navBar from "./components/navbar/navbar";
import home from "./components/home/home";

function App() {
  if(LogInfo){
    console.info(`rendering App.js`)
  }

  return (

    <Routes>
      <navBar/>
      <Route path='/' element={<home/>}></Route>
      <Route path='/products' element={<home/>}></Route>
      <Route path='/products/details' element={<home/>}></Route>
      <Route path='/cart' element={<home/>}></Route>

    </Routes>

  );
}

export default App;
