import react, { Component } from 'react'
import { render } from 'react-dom';
import '../Pokecard.css'

const POKE_API='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

class Pokecard extends Component {

    render() {
        let imgSrc= `${POKE_API}${this.props.data[0].id}.png`;




        return (
            <div className="Pokecard" >
                <h1>{this.props.name}</h1>
                <img src={imgSrc} />
                <div>Type: {this.props.type}</div>
                <div>EXP: {this.props.exp}</div>
            </div>
        )
    }
}

export default Pokecard;