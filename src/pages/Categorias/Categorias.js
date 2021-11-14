import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { getPokemonData } from '../../server/api'
import { Types } from '../../components/PokeDetails/PokeDetailsStyle'
import NavMenu from '../../components/Menu/Menu'
import Footer from '../../components/Footer/Footer'
import Load from '../../components/LoadScreen/Load'
import {
    Container,
    TypeBtn
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
            <NavMenu />
            {load ? <Load /> :
                <Container>
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

                        <button id="whater"
                        onClick={() => {
                            setType(11)
                            setLoad(true)
                        }}>Wather</button>

                        <button id="grass"
                        onClick={() => {
                            setType(12)
                            setLoad(true)
                        }}>Grass</button>

                        <button id="eletric"
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
                    {categoria.map((poke) => {
                        return (
                            <section key={poke.name}>
                                <img 
                                onClick={() => history.push(`/${poke?.id}`)}
                                style={{cursor: 'pointer'}}
                                src={`https://cdn.traction.one/pokedex/pokemon/${poke.id}.png`} 
                                alt='a foto desse pokemon não foi encontrada na api' />
                                <h1>{poke.name}</h1>
                                {poke.types.map((types, idx) => {
                                    return <Types key={idx} id={types.type.name}>{types.type.name}</Types>;
                                })}
                            </section>
                        )
                    })}
                </Container>}
            <Footer />
        </section>
    )
}

export default Categorias