import React, { useState } from "react";
import { searchPokemon } from "../../server/api";
import '../SearchPokemon/SearchPokemon.css'
import '../Pokemon/Pokemon.css'
import { useHistory } from "react-router";

function SearchPokemon(){
    const history = useHistory()
    const [search, setSearch] = useState('');
    const [pokemon, setPokemon] = useState();

    const change = (e) => {
        let buscar = e.target.value.toLowerCase().replace(/\s+/g, '')
        setSearch(buscar)
    }

    const click = async () => {
        const data = await searchPokemon(search);
        setPokemon(data)
        document.getElementById('pokedexContainer').style.display = 'none'

    if(!data){
        alert(`O pokemon ${search} não pode ser encontrado!`)
        window.location.reload();
    }
    };

    return(
        <div className="search-container">
        
        <main className="app-container">
            <div style={{display: 'block'}}>

                <div className="input-field">
                    <input id="input-search" 
                        placeholder="Pesquise o pokémon"
                        onChange={change}
                    />
                    <div className="butons-holder">
                        <button id="btn-search" onClick={click}>Go!</button>
                        <button onClick={() => window.location.reload()} id="reload-all">Ver todos</button>
                    </div>
                </div>
            <div>
    {pokemon &&
        <div  className='pokemon-card' style={{marginTop: '50px'}}>
            <div className="pokemon-img-container">
                <img
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    className="pokemon-img"
                    onClick={() => history.push(`${pokemon.id}`)}
                />
            </div>
           <div className="card-body">
                <div className="card-top">
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