import React from "react";
import Footer from "../../components/Footer/Footer";
import NavMenu from "../../components/Menu/Menu";
import Pokedex from "../../components/Pokedex/Pokex";
import SearchPokemon from '../../components/SearchPokemon/SearchPokemon'
import { getPokemonData, getPokemons } from "../../server/api";
import Load from '../../components/LoadScreen/Load'
import './Home.css'




const { useState, useEffect } = React;

export default function Home() {

    const [pokemons, setPokemon] = useState([])
    const [page, setPage] = useState(0)
    const [total, setTotal] = useState(0)
    const [loading, setLoading] = useState(true);

    const fetchPokemons = async () => {
        try {
            setLoading(true)
            const data = await getPokemons(10, 10 * page);
            console.log(data.results)
            const promises = data.results.map(async (pokemon) => {
                return await getPokemonData(pokemon.url)
            })
            const results = await Promise.all(promises)
            setPokemon(results)
            setLoading(false); //ao carregar a pagina isso altera o loading
            setTotal(Math.ceil(data.count / 10));
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchPokemons();
    }, [page]);
    return (
        <section>
            {loading ? <Load /> : //loading
                <main className="HomePage">
                    <NavMenu />
                    <SearchPokemon />
                    <Pokedex
                        pokemons={pokemons}
                        page={page}
                        setPage={setPage}
                        total={total}
                    />

                </main>
            }
            <Footer />
        </section>
    )
}