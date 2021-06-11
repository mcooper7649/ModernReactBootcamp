import React, { Component } from 'react';
import './App.css';

class App extends Component {

  handleClick(e){
    const rndInt = Math.floor(Math.random() * 10) + 1
    console.log(rndInt)
    if (rndInt == 7){
      this.setState({ 
        num: rndInt,
        winner:true})
    } else {
      this.setState({ 
        num: rndInt})
    }
    
}

constructor(props){
  super(props);
  this.state = {
    num: 0,
    winner: false
  }
  this.handleClick = this.handleClick.bind(this);
}
  render(){
  return (
    <div className="App">
      <h1>Number is: {this.state.num}</h1>
      <button className={this.state.winner ? 'hidden' : 'visible'} onClick={this.handleClick}>Randomize</button>
      <h1 className={this.state.winner ? 'visible' : 'hidden'}>Winner!!!</h1>
    </div>
  );
}
}

export default App;
