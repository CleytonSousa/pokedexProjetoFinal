import React from 'react'

function PokeDetails(props) {
    const {pokemon} = props
    return (
        <div>
            <div>
                <section>
                    <h1>{pokemon.name}</h1>
                    <p>
                    {pokemon.types.map((type, idx) => {
                        return(
                            <p key={idx} id={type.type.name}>
                                {type.type.name}
                            </p>
                        )
                    })}
                    </p>
                    <p>{pokemon.stats[0].stat.name}: {pokemon.stats[0].base_stat}</p>
                    <p>{pokemon.stats[1].stat.name}: {pokemon.stats[1].base_stat}</p>
                    <p>{pokemon.stats[2].stat.name}: {pokemon.stats[2].base_stat}</p>
                    <p>{pokemon.stats[3].stat.name}: {pokemon.stats[3].base_stat}</p>
                    <p>{pokemon.stats[4].stat.name}: {pokemon.stats[4].base_stat}</p>
                    <p>{pokemon.stats[5].stat.name}: {pokemon.stats[5].base_stat}</p>
                </section>

            </div>
            <div></div>
            <div></div>
        </div>
    )
}

export default PokeDetails

