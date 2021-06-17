import React,{  Component } from 'react'
import Coin from './Coin'
import { Button, Col, Row, Container }  from 'react-bootstrap';
import './FlipCoin.css';
import Footer from './Footer';
 
class FlipCoin extends Component{
 
  constructor(props){
    super(props)
     
    // Responsible to render current updated coin face
    this.state = {
       
      // Track total number of flips
      currFace : null,
      totalFlips:0,
      heads: 0,
      flipping: false,
      hidden: false,
      coins: [
     
        // Sides of the coin
        {side:'head', imgSrc:
        'https://www.moneymetals.com/images/products/American-Silver-Eagle.jpg'},
        {side:'tail', imgSrc:
        'https://www.moneymetals.com/images/products/silver-eagle-coin-reverse.jpg'}
      ],
      easterEgg: [""],
    }
     
    // Binding context of this keyword
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
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
    const newFace = this.choice(this.state.coins)
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

  easterEgg(){
    const newMessage = this.choice(this.state.easterEgg)
    console.log(newMessage)
  }


 
  handleClick(){
    this.easterEgg()
    this.flipCoin()
  }

  handleChange(e){
    if (e.target.value === "Buffalo"){
      this.setState(curState => ({  
        coins: [
     
          // Sides of the coin
          {side:'head', imgSrc:
          'https://www.moneymetals.com/images/products/1oz-silvertowne-obverse-silver-buffalo.jpg'},
          {side:'tail', imgSrc:
          'https://2ybaes-0497s6r6rnkm.cloudmaestro.com/V-u7Se6dz/wp-content/uploads/2017/07/a2017-1-oz-SilverTowne-Buffalo-Silver-Round-BACK.jpg.pagespeed.ic.2uAc8TF7co.webp'}
        ]
      }));
    }else if(e.target.value === "Trump"){
      this.setState(curState => ({  
        coins: [
     
          // Sides of the coin
          {side:'head', imgSrc:
          'https://www.moneymetals.com/images/products/1oz-trump-silver-rounds-obverse.jpg'},
          {side:'tail', imgSrc:
          'https://www.moneymetals.com/images/products/1oz-trump-silver-rounds-reverse.jpg'}
        ]
      }));
  }else if(e.target.value === "Trump-Gold"){
    this.setState(curState => ({  
      coins: [
   
        // Sides of the coin
        {side:'head', imgSrc:
        'https://i5.walmartimages.com/asr/dc138d7c-b976-40e1-9de1-ff762b46c6be.6134354d0148619c4e95bc5d0be297c2.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff'},
        {side:'tail', imgSrc:
        'https://images.ontheedgebrands.com/cdn-cgi/image/f=auto,quality=60/images/C35-BK4748.jpg'}
      ],
      easterEgg: [
        "Let's Make America Great Again",
        "Head or Tail? Sounds, like a Win-Win",
        "Lets Party Gay Boys!!!",
        "CHINA VIRUS",
        "You're Fired!!",
        "Sleepy Joe is a fraud",
        "My name is Alex Garcia, and I approve this message"
      ]
    }));
    setTimeout(() => {
      this.setState({
          easterEgg: [""]
      }) 
   }, 5000);
}else if(e.target.value === "Original"){
  this.setState(curState => ({  
    coins: [
     
      // Sides of the coin
      {side:'head', imgSrc:
      'https://www.moneymetals.com/images/products/American-Silver-Eagle.jpg'},
      {side:'tail', imgSrc:
      'https://www.moneymetals.com/images/products/silver-eagle-coin-reverse.jpg'}
    ]
  }));
  }
}

  render(){
    const {currFace, totalFlips, heads, flipping} = this.state
    return(
      <div className="flipcoin">
        <h2 className="coin-title">Let's flip a coin</h2>
         <img className={this.state.hidden ? "hidden" : "Coin"} src="https://www.moneymetals.com/images/products/American-Silver-Eagle.jpg" alt="American Silver Eagle" />
        {/* If current face exist then show current face */}
        {currFace && <Coin info={currFace} flipping={flipping} />}
         
        {/* Button to flip the coin  */}
        <Button size="lg" variant="danger" id="custom-btn" onClick={this.handleClick} disabled={this.state.flipping} >
        {this.state.flipping ? "Flipping Coin..." : "Press to Flip Coin"}
        </Button>
        <br></br>
        <Button className="coinface-btn" onClick={this.handleChange} value="Buffalo">Buffalo Silver Oz</Button>
        <Button className="coinface-btn" onClick={this.handleChange} value="Trump">Trump Silver Oz</Button>
        <Button className="coinface-btn" onClick={this.handleChange} value="Trump-Gold">Trump Gold Oz</Button>
        <Button className="coinface-btn" onClick={this.handleChange} value="Original">Original</Button>

        <Container className="my-grid">
          <Row>
            <Col>Total Flips</Col>
            <Col>Total Heads</Col>
            <Col>Total Tails</Col>
          </Row>
          <Row>
            <Col>{totalFlips}</Col>
            <Col>{heads}</Col>
            <Col>{totalFlips - heads}</Col>
          </Row>
        </Container>
 
        <Footer className="footer"/>
      </div>
    )
  }
}
 
export default FlipCoin