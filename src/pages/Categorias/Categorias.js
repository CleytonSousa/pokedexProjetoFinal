import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { getPokemonData } from '../../server/api'
import { Types } from '../../components/PokeDetails/PokeDetailsStyle'
import NavMenu from '../../components/Menu/Menu'
import Footer from '../../components/Footer/Footer'

export const Categorias = () => {

    const [categoriaFire, setCategoriaFire] = useState([])


    const getFire = async() => {
        // axios.get('https://pokeapi.co/api/v2/type/10/') //fire
        try{
            const data = await axios.get('https://pokeapi.co/api/v2/type/10/')
        const promise = data.data.pokemon.map(async(pokemon) => {
            return await getPokemonData(pokemon.pokemon.url)
        })
        const results = await Promise.all(promise)
        setCategoriaFire(results)
        } catch(err){
            console.log(err)
        }
    }


    useEffect(() => {
        getFire()
      }, []);

    return (
        <section>
            <NavMenu />
                <div>
                    {categoriaFire.map((poke) => {
                        return(
                            <div>
                                <h1>{poke.name}</h1>
                                <img src={`https://cdn.traction.one/pokedex/pokemon/${poke.id}.png`} alt='a foto desse pokemon não foi encontrada na api'/>
                                {poke.types.map((types, idx) => {
                                    return <Types key={idx} id={types.type.name}>{types.type.name}</Types>;
                                })}
                            </div>
                        )
                    })}
                </div>
            <Footer />
        </section>
    )
}
