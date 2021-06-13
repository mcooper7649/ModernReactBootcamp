import React, { Component } from 'react';
import './App.css';
import Lottery from './Lottery';

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
        number: [],
        winningNumbers: []
      }
      // randomly generated N = 40 length array 0 <= A[N] <= 39
   winningNumbers = Array.from({length: 40}, () => Math.floor(Math.random() * 40));

  }
  render(){
    return(
      <div>
        <Lottery mainTitle="Main Lottery" numBalls={6} maxNum={40} />
        <Lottery mainTitle="Mini Lottery" numBalls={4} maxNum={10}/>
      </div>
    )
  }
}

export default App;
  