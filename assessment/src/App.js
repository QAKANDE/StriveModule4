import React from 'react';
import logo from './logo.svg';
import './App.css';
import Albums from './Components/Albums'
import {BrowserRouter as Router,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
    <Route path='/album/' component={Albums} ></Route>
    <Route path='/details/:id' component={Details} ></Route>
    </div>
    </Router>
  );
}

export default App;
