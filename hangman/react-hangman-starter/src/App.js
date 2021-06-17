import React, { Component } from "react";
import "./App.css";
import Hangman from "./Hangman";
import Helmet from 'react-helmet';


class App extends Component {
  render() {
    return (
      <div className="App">
       <Helmet>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="image" property="og:image" content="" />
          <meta name="url" property="og:url" content="" />
          <meta name="description" property="og:description" content="Hangman | Classic Hangman Game" />
          <meta name="author" content="Michael Cooper" />
          <meta name="publish_date" property="og:publish_date" content="2021-06-17T00:00:00-0600"></meta>
          {/* <script src="https://kit.fontawesome.com/8cc1b75eb3.js" crossorigin="anonymous"></script> */}
          <title>Hangman</title>
        </Helmet>
        <Hangman />
        
      </div>
    );
  }
}

export default App;
