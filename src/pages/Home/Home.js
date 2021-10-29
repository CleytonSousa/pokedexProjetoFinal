import React from "react";
import Footer from "../../components/Footer/Footer";
import NavMenu from "../../components/Menu/Menu";
import Pokedex from "../../components/Pokedex/Pokex";
import SearchPokemon from '../../components/SearchPokemon/SearchPokemon'
import { getPokemonData, getPokemons } from "../../server/api";
import Load from '../../components/LoadScreen/Load'
import './Home.css'

const {useState, useEffect} = React;

export default function Home(){

    const [pokemons, setPokemon] = useState([])
    const [loading, setLoading] = useState(true);

    const fetchPokemons = async () => {
        try{
            const data = await getPokemons();
            console.log(data.results)
            const promises = data.results.map(async (pokemon) => {
                return await getPokemonData(pokemon.url)
            })
            const results = await Promise.all(promises)
            setPokemon(results)
            setLoading(false); //ao carregar a pagina isso altera o loading
        } catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        fetchPokemons();
    }, []);
    return(
        <section>
        <NavMenu />
        <SearchPokemon />
        { loading ? <Load /> : //loading
            <main className="HomePage">
                <Pokedex pokemons={pokemons}/>
            </main>
        }

        <Footer />
    </section>
    )
}