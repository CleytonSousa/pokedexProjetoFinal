import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { getPokemonData } from '../../server/api'
import { Types } from '../../components/PokeDetails/PokeDetailsStyle'
import NavMenu from '../../components/Menu/Menu'
import Footer from '../../components/Footer/Footer'
import Load from '../../components/LoadScreen/Load'
import {
    Container,
} from './CategoriasStyle'

const Categorias = () => {

    const [categoria, setCategoria] = useState([])
    const [type, setType] = useState(1)
    const [load, setLoad] = useState(true)


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
                    <section>
                        <button onClick={() => {
                            setType(10)
                            setLoad(true)
                        }}>Fire</button>

                        <button onClick={() => {
                            setType(2)
                            setLoad(true)
                        }}>Fighting</button>

                        <button onClick={() => {
                            setType(1)
                            setLoad(true)
                        }}>Normal</button>

                        <button onClick={() => {
                            setType(4)
                            setLoad(true)
                        }}>Poison</button>

                        <button onClick={() => {
                            setType(5)
                            setLoad(true)
                        }}>Ground</button>

                        <button onClick={() => {
                            setType(6)
                            setLoad(true)
                        }}>Rock</button>

                        <button onClick={() => {
                            setType(7)
                            setLoad(true)
                        }}>Bug</button>

                        <button onClick={() => {
                            setType(8)
                            setLoad(true)
                        }}>Ghost</button>

                        <button onClick={() => {
                            setType(11)
                            setLoad(true)
                        }}>Wather</button>

                        <button onClick={() => {
                            setType(12)
                            setLoad(true)
                        }}>Grass</button>

                        <button onClick={() => {
                            setType(13)
                            setLoad(true)
                        }}>Electric</button>

                        <button onClick={() => {
                            setType(16)
                            setLoad(true)
                        }}>Dragon</button>

                        <button onClick={() => {
                            setType(17)
                            setLoad(true)
                        }}>Dark</button>
                        
                        <button onClick={() => {
                            setType(18)
                            setLoad(true)
                        }}>Fairy</button>
                        

                    </section>
                    {categoria.map((poke) => {
                        return (
                            <section>
                                <img src={`https://cdn.traction.one/pokedex/pokemon/${poke.id}.png`} alt='a foto desse pokemon não foi encontrada na api' />
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