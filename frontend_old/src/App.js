import React, {useState} from "react";
import './App.css';
import {Routes, Route} from 'react-router-dom';

import Navbar from "./components/items/navbar/Navbar";
import { TabPanelList } from "./components/items/navbar/tabPanelList";
import { LogInfo } from "./constants/constant_vals";
// import history from "./history";
import { Provider } from 'react-redux';
import store from './state/store/store';

const App = () => {
    if(LogInfo){
      console.info(`rendering App.js`)
    }
    const [error_app, seterror_app] = useState(false);

    const seterror_app_handler = () => {
      seterror_app(true)
    }


    return (
      <Provider store={store}>

        <Routes>
          <Navbar errorHandler={seterror_app_handler}/>
          <TabPanelList/>
          
          <Route path="/" element={<Home/>}></Route>

        </Routes>
      </Provider>
    )
}

export default App;



