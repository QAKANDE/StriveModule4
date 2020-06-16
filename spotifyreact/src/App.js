import React from 'react';
import './App.css';
import {BrowserRouter as Router , Route } from 'react-router-dom'
import {Row,Col} from 'react-bootstrap'
import Sidebar from './Components/SideBar'
import Footer from './Components/Footer';
import MainContent from './Components/MainContent';


function App() {
  return (
    <div className="App">
  <div id="sidebar">
        <Sidebar/>
  </div>
  <div id="main-content">
      <MainContent/>
  </div>  
      {/* <div className="footer">
      <Footer/>
      </div> */}
    </div>
  );
}

export default App;
