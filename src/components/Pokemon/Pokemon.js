import React,{ useState, useEffect } from "react";
import './Pokemon.css';
import { useHistory } from "react-router";

const Pokemon = (props) => {
    const history = useHistory()
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
                }}>
                <img
                src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`}
                alt={pokemon.name}
                loading='lazy'
                className="pokemon-img"
                onClick={() => history.push(`/${pokemon.id}`)}/>
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
    )

}

export default Pokemon;