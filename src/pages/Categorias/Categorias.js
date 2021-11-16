import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { getPokemonData } from '../../server/api'
import { Types } from '../../components/PokeDetails/PokeDetailsStyle'
import NavMenu from '../../components/Menu/Menu'
import Footer from '../../components/Footer/Footer'
import Load from '../../components/LoadScreen/Load'
// import '../../components/Pokemon/Pokemon.css';
import {
    Container,
    TypeBtn,
    PokemonCard
} from './CategoriasStyle'
import { useHistory } from 'react-router'

const Categorias = () => {

    const [categoria, setCategoria] = useState([])
    const [type, setType] = useState(1)
    const [load, setLoad] = useState(true)
    const history = useHistory() 


    const getFire = async () => {
        try {
            const data = await axios.get(`https://pokeapi.co/api/v2/type/${type}/`) //fire
            const promise = data.data.pokemon.map(async (pokemon) => {
                return await getPokemonData(pokemon.pokemon.url)
            })
            const results = await Promise.all(promise)
            setCategoria(results)
            setLoad(false)
        } catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        getFire()
    }, [type]);

    return (
        <section>
            <NavMenu categorias="active" />
            {load ? <Load /> :
                <Container>
                    <h1>Escolha o tipo de pokémon</h1>
                    <TypeBtn>
                        <button id="fire"
                        onClick={() => {
                            setType(10)
                            setLoad(true)
                        }}>Fire</button>

                        <button id="fighting"
                        onClick={() => {
                            setType(2)
                            setLoad(true)
                        }}>Fighting</button>

                        <button id="normal"
                        onClick={() => {
                            setType(1)
                            setLoad(true)
                        }}>Normal</button>

                        <button id="poison"
                        onClick={() => {
                            setType(4)
                            setLoad(true)
                        }}>Poison</button>

                        <button id="ground"
                        onClick={() => {
                            setType(5)
                            setLoad(true)
                        }}>Ground</button>

                        <button id="rock"
                        onClick={() => {
                            setType(6)
                            setLoad(true)
                        }}>Rock</button>

                        <button id="bug" //Deus me livre
                        onClick={() => {
                            setType(7)
                            setLoad(true)
                        }}>Bug</button>

                        <button id="ghost"
                        onClick={() => {
                            setType(8)
                            setLoad(true)
                        }}>Ghost</button>

                        <button id="water"
                        onClick={() => {
                            setType(11)
                            setLoad(true)
                        }}>Water</button>

                        <button id="grass"
                        onClick={() => {
                            setType(12)
                            setLoad(true)
                        }}>Grass</button>

                        <button id="electric"
                        onClick={() => {
                            setType(13)
                            setLoad(true)
                        }}>Electric</button>

                        <button id="dragon"
                        onClick={() => {
                            setType(16)
                            setLoad(true)
                        }}>Dragon</button>

                        <button id="dark"
                        onClick={() => {
                            setType(17)
                            setLoad(true)
                        }}>Dark</button>
                        
                        <button id="fairy"
                        onClick={() => {
                            setType(18)
                            setLoad(true)
                        }}>Fairy</button>
                        
                    </TypeBtn>
                    
                    <section className="pokedexGrid">

                        {categoria.map((poke) => {
                            return (
                                <PokemonCard key={poke.name}>

                                    <div className="areaPokemon">
                                        <img 
                                            onClick={() => history.push(`/${poke?.id}`)}
                                            style={{cursor: 'pointer'}}
                                            src={`https://cdn.traction.one/pokedex/pokemon/${poke.id}.png`} 
                                            alt='O pokémon ainda não saiu do ovo'
                                            title={`O lendario ${poke.name}`}
                                            loading='lazy'
                                        />
                                    </div>
                                    <div className="card-body">
                                        <div className="card-top">
                                            <h3>{poke.name}</h3>
                                        </div>
                                        <div className='card-bottom'>
                                            <div className='types pokemon-types'>
                                                {poke.types.map((types, idx) => {
                                                    return (
                                                        <div key={idx} className='pokemon-type-text' id={types.type.name}>
                                                            {types.type.name}
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>

                                </PokemonCard>
                            )
                        })}
                    </section>
                </Container>}
            <Footer />
        </section>
    )
}

export default Categorias