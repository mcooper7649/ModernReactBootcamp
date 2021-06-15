
import React,{ Component } from 'react'
import './Coin.css';
class Coin extends Component{
  render(){
    return(
      <div class='Coin'>
        <img
          className="Coin-img"
          src={this.props.info.imgSrc}
        />
      </div>
    )
  }
}
 
export default Coin