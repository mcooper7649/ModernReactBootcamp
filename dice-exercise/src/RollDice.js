import React, { Component } from "react";
import Die from './Die';
import './RollDice.css'

class RollDice extends Component {

    static defaultProps = {
        dice1: ["one", "two", "three", "four", "five", "six"],
        dice2: ["one", "two", "three", "four", "five", "six"]
    }

constructor(props){
    super(props);
    this.state = {
        dice1: "one",
        dice2: "one",
        rolling: false,
    }
    this.handleClick = this.handleClick.bind(this);
}

handleClick(e){
    let rand1 = this.props.dice1[Math.floor(Math.random()*this.props.dice1.length)];
    let rand2 = this.props.dice2[Math.floor(Math.random()*this.props.dice2.length)];
    console.log(rand1)
    console.log(rand2)
//Set state weith new rolls
    this.setState({ 
        rolling:true,
        dice1: rand1,
        dice2: rand2
    })

// wait on second, then set rolling to false
    setTimeout(() => {
        this.setState({
            rolling: false
        }) 
     }, 1000);
}



render (){
    return(
    <div className="RollDice">
        <div className="RollDice-container">
            <Die dice={this.state.dice1} dice1={this.props.dice1} rolling={this.state.rolling} />
            <Die dice={this.state.dice2} dice2={this.props.dice2} rolling={this.state.rol} />
            </div>
            <button onClick={this.handleClick} disabled={this.state.rolling}>
                {this.state.rolling ? "Rolling..." : "Roll Dice!"}
            </button>
    </div>
        
    )
  }
}

export default RollDice;