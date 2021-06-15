import React, { Component } from 'react';
import './App.css';
import Flipcoin from './FlipCoin';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyHelmet from './MyHelmet';

class App extends Component {
  render(){
  return (
    <div className="App">
      <MyHelmet />
      <Flipcoin />
    </div>
  );
}
}

export default App;
