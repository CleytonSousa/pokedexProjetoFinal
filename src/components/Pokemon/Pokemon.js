import React,{ useState, useEffect } from "react";
import './Pokemon.css';
import PokeDetails from "../PokeDetails/PokeDetails";

const Pokemon = (props) => {
    const [id, setId] = useState()
    const { pokemon }= props
    const [click, setClick] = useState(false)

    useEffect(() => {
        if(pokemon.id < 10){
                setId('00' + pokemon.id)
            }
        
            if(pokemon.id >= 10 && pokemon.id < 100){
                setId('0' + pokemon.id)
            }

            if(pokemon.id > 100){
                setId(pokemon.id)
            }
    }, [])
    return(
        <div className='pokemon-card'>
            <div className="pokemon-img-container" onClick={() =>{
                    click ? setClick(false) : setClick(true)
                    console.log(click)
                }}>
                <img
                src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`}
                alt={pokemon.name}
                loading='lazy'
                className="pokemon-img"
                />
            </div>
           <div className="card-body">
                <div className="card-top">
                    {/* <div>N°{pokemon.id}</div> */}
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
            { click ? <PokeDetails pokemon={pokemon} /> : ''}
        </div>
    )

}

export default Pokemon;