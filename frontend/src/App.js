import React, {useState} from "react";
import './App.css';
import {Router, Route, Switch, Link} from 'react-router-dom';

// import NavBar from "./components/items/navbar/Navbar";
import { LogInfo } from "./constants/constant_vals";
import history from "./history";

const App = () => {
    if(LogInfo){
      console.info(`rendering App.js`)
    }
    const [error_app, seterror_app] = useState(false);

    const seterror_app_handler = () => {
      seterror_app(true)
    }


    return (
        <Router history={history}>
          {/* <NavBar error_handler={seterror_app_handler}/> */}
          <div>hey</div>
        </Router>
    )
}

export default App;



