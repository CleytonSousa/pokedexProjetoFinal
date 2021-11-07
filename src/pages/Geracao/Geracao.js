import React, { useEffect, useState, useRef } from 'react'
import Footer from '../../components/Footer/Footer'
import NavMenu from '../../components/Menu/Menu'
import SearchPokemon from '../../components/SearchPokemon/SearchPokemon'
import { getPokemonData } from '../../server/api'
import { useHistory } from 'react-router'
import '../../components/Pokemon/Pokemon.css'
import Load from '../../components/LoadScreen/Load'
import arow from '../../assets/arrow.png'

import axios from 'axios'


import {
    CardContainer,
    Container,
    Menu,
    ArrowCarousel
} from './GeracaoStyle'

import {LoadingText} from './Loading/Loading'

const Geracao = () => {
    const history = useHistory()
    const [gerId, setGerId] = useState(1)
    const [pokemonData, setPokemonData] = useState()
    const [loading, setLoading] = useState(true)
    const [pokemonImageLoad, setPokemonImageLoad] = useState(true)
    const carrosel = useRef(null)
    const [city, setCity] = useState()


    const getPokemonDataBaseInGeration = async () => {
        try {
            const data = await axios.get(`https://pokeapi.co/api/v2/generation/${gerId}`);
            setCity(data.data.main_region.name)

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
        setTimeout(() => {
            setPokemonImageLoad(false)
        }, 4000);
    }, [gerId])

    function next(){
        gerId === 1 ? setGerId(8) : setGerId(gerId - 1)
        setPokemonImageLoad(true)
    }

    function back(){
        gerId === 8 ? setGerId(1) : setGerId(gerId + 1)
        setPokemonImageLoad(true)
    }

    const leftClick = (e) => {
        e.preventDefault();
        carrosel.current.scrollLeft -= carrosel.current.offsetWidth + 100
    }

    const rightClick = (e) => {
        e.preventDefault();
        carrosel.current.scrollLeft += carrosel.current.offsetWidth - 100
    }
    return (
        <section>
            <NavMenu />
            <SearchPokemon />
            <main id='pokedexContainer'>
                {loading ? <Load /> :
                    <>
                        <main id='pokedexContainer'>
                            <Menu>
                                <button onClick={() => next()}>Back</button>
                                <h1>Geração {gerId}</h1>
                                <button onClick={() => back()}>Next</button>
                            </Menu>
                            <Container ref={carrosel}>
                                {pokemonData?.map((pokemon, idx) => {
                                    return (
                                        <CardContainer key={idx} className='pokemon-card'>
                                            <section className="pokemon-img-container">
                                                {pokemonImageLoad ? <div style={{textAlign: 'center', paddingBottom: "5px"}}><img style={{width: '150px', height: '150px'}} src="https://c.tenor.com/0prLZ4UeNVAAAAAM/pokemon.gif" alt="" />
                                                <span className="animate-charcter"><LoadingText /></span>
                                                </div>: <section >
                                                    <img
                                                    onClick={() => history.push(`/${pokemon?.id}`)}
                                                    src={`https://cdn.traction.one/pokedex/pokemon/${pokemon?.id}.png`}
                                                    alt='esse pokemon não foi encontrado na api'
                                                    loading='lazy'
                                                    className="pokemon-img" />
                                                </section>}
                                            </section>
                                            <section className="card-body">
                                                <section className="card-top">
                                                    <h3>{pokemon?.name}</h3>
                                                </section>
                                                <section className='card-bottom'>
                                                    <section className='types pokemon-types'>
                                                        {pokemon?.types.map((type, idx) => {
                                                            return (
                                                                <section key={idx} className='pokemon-type-text' id={type.type.name}>
                                                                    {type.type.name}
                                                                </section>
                                                            )
                                                        })}
                                                    </section>
                                                </section>
                                            </section>
                                        </CardContainer>

                                    )
                                })}
                            </Container>
                            <ArrowCarousel>
                                <button onClick={leftClick} >
                                    <img id="left" src={arow} alt=""/>
                                </button>

                                <span style={{fontSize: "4vw"}}>Região de: <span style={{color: 'rgba(0, 181, 204, 1)', textDecoration: 'underline'}}>{city}</span></span>

                                <button onClick={rightClick}>
                                    <img src={arow} alt=""/>
                                </button>
                                
                            </ArrowCarousel>
                        </main>
                    </>
                }
            </main>
            <Footer />
        </section>
    )
}

export default Geracao
