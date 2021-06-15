import { Component } from "react";
import Coin from "./Coin";
import './CoinFlip.css';

class CoinFlip extends Component{

    static defaultProps = {
        title: "Lets flip a Coin",
        heads: "../AE-Coin-Heads.jpeg",
        tails: "../AE-Coin-Tails.jpeg"
      };

    constructor(props){
        super(props);
        this.state = {
            result: "",
            nader: "nader",
            totalFlips: 0,
            totalHeads: 0,
            totalTails: 0,
            flipping: false
        }

        this.handleClick = this.handleClick.bind(this)
    }
    
    coinToss() {
        this.setState({ nader: "" }, () => {
          if (Math.random() < 0.5) {
            this.setState({ result: "heads" });
            console.log("heads");
          } else {
            this.setState({ result: "tails" });
            console.log("tails");
          }
        });
      }

    handleClick(){
        this.coinToss();
    }

    render(){
        return (

            <section className="CoinFlip">
                <div id="coin" className={this.state.result} key={+new Date()}>
                    <div class="side-a">
                        <h2>TAIL</h2>
                    </div>
                    <div className="side-b">
                        <h2>HEAD</h2>
                    </div>
                </div>
            <Coin defaultProps={this.state} defaultImage={this.props.heads} />
            <button className="BTN-Flip" onClick={this.handleClick}>Flip Me!</button>
            <h3>Out of {this.props.totalFlips} flips, there have been {this.props.totalHeads}  heads and {this.props.totalTails}  tails.</h3>
            </section>
        )
    }
}

export default CoinFlip;