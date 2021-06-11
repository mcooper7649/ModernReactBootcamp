import { Component } from "react";
import './Die.css'

class Die extends Component {
   
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <i className={`Die fas fa-dice-${this.props.dice} ${this.props.rolling? 'shaking' : ''}`}></i>
            </div>
        )
    }
}

export default Die;