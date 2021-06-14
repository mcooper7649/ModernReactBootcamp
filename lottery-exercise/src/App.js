import React, { Component } from 'react';
import './App.css';
import Lottery from './Lottery';
import Helmet from "react-helmet";

class App extends Component {
    render(){
    return(
      <div className="App">
        <Helmet>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="author" content="Michael Cooper" />
          <meta name="image" property="og:image" content="https://image.prntscr.com/image/pegFvHJQTMasA7VIqA9dzA.png" />
          <meta name="description" property="og:description" content="Lucky Lotta Generator App" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,100&display=swap" rel="stylesheet" /> 
          <script src="https://kit.fontawesome.com/8cc1b75eb3.js" crossorigin="anonymous"></script>
          <title>Lottery App</title>
        </Helmet>
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
  