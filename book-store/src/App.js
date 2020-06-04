import React from "react";
import './App.css';
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import BookJumbotron from "./Components/BookJumbotron";
import Home from "./Components/Home";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
    <NavBar/>
    <BookJumbotron/>
    <Home/>
      </div>
      <Footer/>

    </div>
  );
}

export default App;