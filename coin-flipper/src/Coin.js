
import React,{ Component } from 'react'
import './Coin.css';
class Coin extends Component{
  render(){
    return(
      <div className={this.props.flipping ? "flip-coin": "Coin"}>
        <img src={this.props.info.imgSrc}  alt={this.props.info.flipping}/>
      </div>
    )
  }
}
 
export default Coin