import React, { Component } from 'react';

class Lottery extends Component {
    constructor(props){
        super(props);
        this.state = {
            winningNumbers: []
        }
       let [...winningNumbers] = (numBalls, maxNum) => [...new Array(numBalls)]
    .map(() => Math.round(Math.random() * maxNum));
    }
    render(){
      return(
        <div>
          <h1>{this.props.mainTitle}</h1>
          <button>Run Lottery!</button>
          <ul>
          {this.state.winningNumbers.map(t => <li>t</li> />)}
          </ul>
        </div>
      )
    }
  }
  
  export default Lottery;