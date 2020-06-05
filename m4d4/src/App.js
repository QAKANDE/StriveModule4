import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListOfBooks from './Components/ListOfBooks'
import Badge from './Components/Badge'
import BadgeDisplay from './Components/Badge';

function App() {
  return (
    <div className="App">
   <ListOfBooks text="Qudri"/>
   <BadgeDisplay color="warning" text="KB" />
    </div>  
    );
}

export default App;
