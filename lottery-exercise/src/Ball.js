import { Component } from "react";
import './Ball.css'

class Ball extends Component {
    constructor(props){
        super(props);
        this.state = {
            rolling: true
        }
    }
    render(){
        return <div className={`Ball ${this.state.rolling? 'shaking': ''}`}>{this.props.num}</div>
    }
}


export default Ball;