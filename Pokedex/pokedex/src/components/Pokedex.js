import react, { Component } from 'react'
import Pokecard from './Pokecard'
import '../Pokedex.css';

class Pokedex extends Component {
    render() {
      return (
        <div>
            <h1>Pokedex</h1>
            <Pokecard data={this.props.data}/>
        </div>
      );
    }
  }
export default Pokedex;