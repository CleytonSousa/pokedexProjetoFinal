import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer/Footer'
import NavMenu from '../../components/Menu/Menu'
import SearchPokemon from '../../components/SearchPokemon/SearchPokemon'
import { getPokemonData } from '../../server/api'
import { useHistory } from 'react-router'
import '../../components/Pokemon/Pokemon.css'
import Load from '../../components/LoadScreen/Load'

import axios from 'axios'


import {
    CardContainer,
    Container,
    Menu
} from './GeracaoStyle'

const Geracao = () => {
    const history = useHistory()
    const [gerId, setGerId] = useState(1)
    const [pokemonData, setPokemonData] = useState()
    const [loading, setLoading] = useState(true)


    const getPokemonDataBaseInGeration = async () => {
        try {
            const data = await axios.get(`https://pokeapi.co/api/v2/generation/${gerId}`);

            const promises = data.data.pokemon_species.map(async (pokemon) => {
                return await getPokemonData(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            })
            const results = await Promise.all(promises)
            setPokemonData(results)

        } catch (err) {
            console.log(err)
        }
        setLoading(false)
    }

    useEffect(() => {
        getPokemonDataBaseInGeration()
    }, [gerId])


    return (
        <div>
            <NavMenu />
            <SearchPokemon />
            <main id='pokedexContainer'>
                {loading ? <Load /> : 
                <>
                <main id='pokedexContainer'>
                <Menu>
                    <button onClick={() => gerId === 1 ? setGerId(8) : setGerId(gerId - 1)}>Back</button>
                    <h1>Geração {gerId}</h1>
                    <button onClick={() => gerId === 8 ? setGerId(1) : setGerId(gerId + 1)}>Next</button>
                </Menu>
                <Container>
                    {pokemonData?.map((pokemon, idx) => {
                        return (
                            <CardContainer key={idx} className='pokemon-card'>
                                <div className="pokemon-img-container">
                                    <img
                                        src={`https://cdn.traction.one/pokedex/pokemon/${pokemon?.id}.png`}
                                        alt={'esse pokemon não foi encontrado na api'}
                                        loading='lazy'
                                        className="pokemon-img"
                                        onClick={() => history.push(`/${pokemon?.id}`)} />
                                </div>
                                <div className="card-body">
                                    <div className="card-top">
                                        <h3>{pokemon?.name}</h3>
                                    </div>
                                    <div className='card-bottom'>
                                        <div className='types pokemon-types'>
                                            {pokemon?.types.map((type, idx) => {
                                                return (
                                                    <div key={idx} className='pokemon-type-text' id={type.type.name}>
                                                        {type.type.name}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </CardContainer>

                        )
                    })}
                </Container>
            </main>
                </>
                }
            </main>
            <Footer />
        </div>
    )
}

export default Geracao
