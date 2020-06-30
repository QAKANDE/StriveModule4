import React from 'react';
import logo from './logo.svg';
import './App.css';
import Albums from './Components/Albums'
import {BrowserRouter as Router,Route} from 'react-router-dom'

function App() {
  return (
    
    <div className="App">
   <Albums/>
    </div>

  );
}

export default App;
