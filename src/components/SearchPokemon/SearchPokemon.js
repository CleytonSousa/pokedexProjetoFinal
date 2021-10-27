import React, { useState } from "react";
import { searchPokemon } from "../../server/api";
import '../SearchPokemon/SearchPokemon.css'
import '../Pokemon/Pokemon.css'

function SearchPokemon(){
    const [search, setSearch] = useState('');
    const [pokemon, setPokemon] = useState();

    const change = (e) => {
        setSearch(e.target.value)
    }

    const click = async (e) => {
        const data = await searchPokemon(search);
        console.log(data)
        setPokemon(data)
        document.getElementById('pokedexContainer').style.display = 'none'
    };
    
    return(
        <div>
        <main className="app-container">
            <div style={{display: 'block'}}>

                <div className="input-field">
                    <input id="input-search" 
                        placeholder="Pesquise o pokémon"
                        onChange={change}
                    />
                    <button id="btn-search" onClick={click}>Go!</button>
                </div>
            <div>
    {pokemon &&
        <div  className='pokemon-card' style={{marginTop: '50px'}}>
            <div className="pokemon-img-container">
                <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className="pokemon-img"
                />
            </div>
           <div className="card-body">
                <div className="card-top">
                    <div>N°{pokemon.id}</div>
                    <h3>{pokemon.name}</h3>
                </div>
                <div className='card-bottom'>
                <div className='types pokemon-types'>
                {pokemon.types.map((type, idx) => {
                        return(
                            <div key={idx} className='pokemon-type-text' id={type.type.name}>
                                {type.type.name}
                            </div>
                        )
                    })}
                </div>
                </div>
            </div>
        </div>
    }
            </div>
            </div>
        </main>
            
        </div>
    );
}

export default SearchPokemon;