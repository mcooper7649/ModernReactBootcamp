import react, { Component } from 'react'
import { render } from 'react-dom';

class Pokecard extends Component {

    render() {
        console.log(this.props.data)
        const everyPokemon = this.props.data
        const pokeImages =  'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png';

      return (
          <div>
          <ul>
          {everyPokemon.map(i => <li>{i.name}
          <br />
          <br />{i.type}
          <br />{i.base_experience}
          <br /></li>)}
          </ul>
          </div>
      )
    }
  }
export default Pokecard;