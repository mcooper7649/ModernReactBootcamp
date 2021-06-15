import { Component } from "react";


class Coin extends Component {
     
    
    render (){
            return (
                <div className="Coin">
                <h1>{this.props.title}</h1>
                <img src={this.props.defaultImage}></img>
                </div>
                
                
            )
        }
    }

    export default Coin;