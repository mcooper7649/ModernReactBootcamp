import React, { Component } from "react";
import "./Hangman.css";
import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";
import { randomWord} from './words';

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6]

  };

  constructor(props) {
    super(props);
    this.state = { nWrong: 0, guessed: new Set(), answer: randomWord(), gameOver: false, winner: false};
    this.handleGuess = this.handleGuess.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleWrong (){
    console.log("Doesn't Have Letter")
    if ( this.state.nWrong >= this.props.maxWrong ){
      this.setState(st => ({
      gameOver: st.gameOver = true
      }));
      // let audio = new Audio("./ending_mario.mp3")
      // const start = () => {
      //     audio.play()
      //   }
      //   start();
      console.log("Loser")
    } else {
      let audio = new Audio("./wrong.mp3")
      const start = () => {
          audio.play()
        }
        start();
    }
  }
    
  

  handleRight(){
    console.log("Does have letter")
    console.log(this.state.guessed)

    if(this.state.winner){
      // let audio = new Audio("./ending_mario.mp3")
      // const start = () => {
      //     audio.play()
      //   }
      //   start();
        console.log("Winner")
    }else {
    let audio = new Audio("./correct.mp3")
    const start = () => {
        audio.play()
      }
      start();
  }}

  

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    return this.state.answer
      .split("")
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_")
      );
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    let ltr = evt.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
    }));
    
    if (this.state.answer.includes(ltr)){
      this.handleRight()
    } else {
      this.handleWrong()
    }
  }

  handleClick(){
    this.resetGame();
  }

  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
      <button
        className="keyboard"
        key={ltr}
        value={ltr}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(ltr)}
      >
        {ltr}
      </button>
    ));
  }

  resetGame(){
    this.setState(st => ({
      nWrong: 0, guessed: new Set(), answer: randomWord(), gameOver: false, winner: false 
    }));
    let audio = new Audio("./reset.mp3")
      const start = () => {
          audio.play()
        }
        start();
  }


  /** render: render game */
  render() {

    const gameOver = this.state.nWrong >= this.props.maxWrong;
    const isWinner = this.guessedWord().join('') === this.state.answer;
    let gameState = this.generateButtons();
    if(isWinner) gameState = 'You Win!';
    if(gameOver) gameState = "You Lose!";
    if (isWinner){
       let audio = new Audio("./win.mp3")
      const start = () => {
          audio.play()
        }
        start();
    }
    if(gameOver){
      let audio = new Audio("./ending_mario.mp3")
      const start = () => {
          audio.play()
        }
        start();
    }

    return (
      <div className='Hangman'>
        <h1>Hangman</h1>
        <img alt={this.state.nWrong + "/6 Guesses"} src={this.props.images[this.state.nWrong] } />
        <p className='Hangman-count'>Number of Wrong Guesses: {this.state.nWrong}</p>
        <p className='Hangman-word'>{!gameOver ? this.guessedWord(): this.state.answer}</p>
        <p className='Hangman-btns'>
         {gameState}
        </p>
        <br></br>
      <button id="reset" className="reset-game-btn" onClick={this.handleClick}>Reset Game</button>
        
        
      </div>
    );
  }
}

export default Hangman;
