import React,{ Component } from 'react'
import Coin from './Coin'
import Button from 'react-bootstrap/Button';
import './FlipCoin.css';
 
class FlipCoin extends Component{
  static defaultProps = {
    coins : [
     
      // Sides of the coin
      {side:'head', imgSrc:
'https://www.moneymetals.com/images/products/American-Silver-Eagle.jpg'},
      {side:'tail', imgSrc:
'https://www.moneymetals.com/images/products/silver-eagle-coin-reverse.jpg'}
    ]
  }
 
  constructor(props){
    super(props)
     
    // Responsible to render current updated coin face
    this.state = {
       
      // Track total number of flips
      currFace : null,
      totalFlips:0,
      heads: 0,
      flipping: false,
      hidden: false
    }
     
    // Binding context of this keyword
    this.handleClick = this.handleClick.bind(this)
  }
 
   // Function takes array of different faces of a coin
  //  and return a random chosen single face
  choice(arr){
    const randomIdx = Math.floor(Math.random() * arr.length)
    return arr[randomIdx]
  }
   
  // Function responsible to update the states
  // according to users intractions
  flipCoin(){
    const newFace = this.choice(this.props.coins)
    this.setState(curState => {
      const heads = curState.heads +
      (newFace.side === 'head' ? 1 : 0)
      return {
        currFace:newFace,
        totalFlips:curState.totalFlips + 1,
        heads:heads,
        flipping: true,
        hidden: true
      }
    })

    let audio = new Audio("./cointoss.mp3")
    const start = () => {
        audio.play()
      }
      start();

    setTimeout(() => {
      this.setState({
          flipping: false
      }) 
   }, 500);
  }
 
  handleClick(){

    this.flipCoin()
  }
  render(){
    const {currFace, totalFlips, heads, flipping, defaultFace } = this.state
    return(
      <div>
        <h2 className="coin-title">Let's flip a coin</h2>
         <img className={this.state.hidden ? "hidden" : "Coin"} src="https://www.moneymetals.com/images/products/American-Silver-Eagle.jpg" />
        {/* If current face exist then show current face */}
        {currFace && <Coin info={currFace} flipping={flipping} />}
         
        {/* Button to flip the coin  */}
        <Button size="lg" variant="danger" id="custom-btn" onClick={this.handleClick} disabled={this.state.flipping} >
        {this.state.flipping ? "Flipping Coin..." : "Flip Me!"}
        </Button>
        
         
         
        <p className="coin-p">
          Out of {totalFlips} flips, there have been {heads} heads
          and {totalFlips - heads} tails
        </p>
 
 
      </div>
    )
  }
}
 
export default FlipCoin