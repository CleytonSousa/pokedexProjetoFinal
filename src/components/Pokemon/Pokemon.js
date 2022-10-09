import React, { useState } from "react";
import './Pokemon.css';
import { useHistory } from "react-router";

const Pokemon = (props) => {
    const history = useHistory()
    const { pokemon } = props
    const [click, setClick] = useState(false)
    return (
        <div className='pokemon-card'>
            <div className="pokemon-img-container" onClick={() => {
                click ? setClick(false) : setClick(true)
            }}>
                <img
                    src={pokemon.sprites.front_default}
                    alt='Esse pokemon não pode ser encontrado'
                    loading='lazy'
                    className="pokemon-img"
                    onClick={() => history.push(`/${pokemon.id}`)} />
            </div>
            <div className="card-body">
                <div className="card-top">
                    <h3>{pokemon.name}</h3>
                </div>
                <div className='card-bottom'>
                    <div className='types pokemon-types'>
                        {pokemon.types.map((type, idx) => {
                            return (
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