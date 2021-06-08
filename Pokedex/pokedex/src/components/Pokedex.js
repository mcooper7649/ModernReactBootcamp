import react, { Component } from 'react'
import { render } from 'react-dom';
import Pokecard from './Pokecard'

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