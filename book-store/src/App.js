import React from "react";
import './App.css';
import {BrowserRouter as Router , Route} from 'react-router-dom'
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

import Home from "./Components/Home";
import Details from "./Components/Details"

function App() {
  return (

      <Router>
      <NavBar/>
      <Route path= '/' exact component={Home}/>
      <Route path='/details/:id' component={Details}/>
      </Router>
  );
}

export default App;