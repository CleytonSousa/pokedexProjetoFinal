import React from "react";
import Pokemon from "../Pokemon/Pokemon";
import './Pokedex.css'

const Pokedex = (props) => {
    const { pokemons } = props;
    return(
        <div className="page-container">
           <div className='pokedexGrid' id="pokedexContainer">
               {pokemons.map((pokemon, idx) => {
                   return(
                       <Pokemon pokemon={pokemon} key={pokemon.name} />
                   )
               })}
           </div>
        </div>
    )
}

export default Pokedex;