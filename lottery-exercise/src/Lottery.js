import React, { Component } from "react";
import Ball from "./Ball";
import "./Lottery.css";

class Lottery extends Component {
  static defaultProps = {
    title: "Lotto",
    numBalls: 6,
    maxNum: 40,
    rules: "6 balls total with a Ball Maximum of 40"
  };
  constructor(props) {
    super(props);
    this.state = { 
        rolling: false,
        nums: Array.from({ length: this.props.numBalls }) };
    this.handleClick = this.handleClick.bind(this);

    
  }
  generate() {
    this.setState(curState => ({  
      nums: curState.nums.map(
        n => Math.floor(Math.random() * this.props.maxNum) + 1
      )
    }));

    setTimeout(()=> {
        this.setState({
            rolling: false
        })
    }, 100);
  }
  handleClick() {
      this.setState({
          rolling: true
      })
        let audio = new Audio("./audio.mp3")
    const start = () => {
        audio.play()
      }
      start();
    
    setTimeout(()=> {
        this.generate();
    }, 1000);
  }


  render() {
    return (
      <section className='Lottery'>
        <h1>{this.props.title}</h1>
        <p>{this.props.rules}</p>
        <div>
          {this.state.nums.map(n => (
            <Ball key={Math.random(n)} num={n} />
          ))}
        </div>
        <button onClick={this.handleClick} disabled={this.state.rolling}>Generate</button>
      </section>
    );
  }
}

export default Lottery;
