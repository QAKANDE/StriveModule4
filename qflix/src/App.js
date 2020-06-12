import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar'
import Gallery from './Components/Gallery';
import Footer from './Components/Footer'
import Genre from './Components/Genre'
import {BrowserRouter as Router , Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">

     <Router>
     <NavBar/>
     <Genre/>
     <Gallery/>
     <Footer/>
     </Router>
    </div>
  );
}

export default App;
