import React, { Component } from 'react';
import './App.css';
import Lottery from './Lottery'

class App extends Component {
    render(){
    return(
      <div className="App">
        <i className="main fas fa-gem"></i>
        <i className="main fas fa-gem"></i>
        <i className="main fas fa-gem"></i>
        <h1 className="main-h1">
         Lucky Lotto Number Generator
        </h1>
        <i className="main fas fa-gem"></i>
        <i className="main fas fa-gem"></i>
        <i className="main fas fa-gem"></i>
        <Lottery />
        <Lottery 
        title="Mini Daily" maxNum={10} numBalls={4} 
        rules="4 balls total, with a Ball Maximum of 10"
        />
        <Lottery 
        title="Keno" maxNum={80} numBalls={10}
        rules="10 balls total, with a Ball Maximum of 80"

        />
      </div>
    )
  }
}

export default App;
  