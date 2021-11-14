
import './PokeDetailsStyle.js';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Load from '../LoadScreen/Load';
import {Pokeball} from '../PokeballClick/PokeballClick'

import NavMenu from "../Menu/Menu";
import Footer from "../Footer/Footer"

// style
import {
    Types,
    Container,
    StatsDiv,
    Button
} from './PokeDetailsStyle.js';

function PokeDetails(props) {
    // const {pokemon} = props
    const { match, history } = props;
    const { params } = match;
    const { pokemonId } = params;
    const [pokemon, setPokemon] = useState(undefined);
    const [clickPoke, setPokeClick] = useState(true)


    useEffect(() => {
        axios
          .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
          .then(function (response) {
            const { data } = response;
            setPokemon(data);
          })
          .catch(function (error) {
            console.error(error);
          });
      }, [pokemonId]);

     setTimeout(() => {
       setPokeClick(false)
     }, 1000)


      const generatePokemonJSX = (pokemon) => {
        const { name, id, species, height, weight, types } = pokemon;
        const fullImageUrl = `https://cdn.traction.one/pokedex/pokemon/${id}.png`;
        return (
          
          <Container>
            {clickPoke ? <Pokeball /> : 
          
          <>

          <NavMenu />
          <section className='pokemonInfos'>
                <h1> {(name)} </h1>
              <div className='types'>
                  <p style={{fontSize: '20px', marginTop: '5px'}}> Tipo: </p> 
                    {types.map((typeInfo) => {
                    const { type } = typeInfo;
                    const { name } = type;

                    return <Types id={name} key={name}> {`${name}`} </Types>;
                  })}
              </div>

              <div className="moreInfos">
                <h3>Tamanho: {height / 10 + "m"} </h3>
                <h3>Peso: {weight / 10 + "Kg"} </h3>
              </div>
          </section>

          <section className='pokemonImage'>
            {Load ? <img src={fullImageUrl} alt='pokemon' /> : ''}
          </section>

          <div className='about'>
               <StatsDiv>
                    <p>HP:  {pokemon.stats[0].base_stat}</p>
                    <progress value={pokemon.stats[0].base_stat} max="130"></progress>
               </StatsDiv>

               <StatsDiv>
                  <p>Ataque:  {pokemon.stats[1].base_stat}</p>
                   <progress value={pokemon.stats[1].base_stat} max="130"></progress>
               </StatsDiv>

               <StatsDiv>
                    <p>Defesa:  {pokemon.stats[2].base_stat}</p>
                    <progress value={pokemon.stats[2].base_stat} max="130"></progress>
               </StatsDiv>

               <StatsDiv>
                    <p>Velocidade:  {pokemon.stats[5].base_stat}</p>
                    <progress value={pokemon.stats[5].base_stat} max="130"></progress>
                </StatsDiv>

               <StatsDiv>
                    <p>Ataque especial:  {pokemon.stats[3].base_stat}</p>
                    <progress value={pokemon.stats[3].base_stat} max="130"></progress>
                </StatsDiv>

                <StatsDiv>
                    <p>Defesa especial:  {pokemon.stats[4].base_stat}</p>
                   <progress value={pokemon.stats[4].base_stat} max="130"></progress>
                </StatsDiv>

                
          </div> 
          <Footer />
          </>}
        </Container>
        );
      };

      return (
        <>
          
          {pokemon !== undefined && pokemon && generatePokemonJSX(pokemon)}
          {pokemon === false && <h1> Pokemon not found</h1>}
    
          {pokemon !== undefined && (
            <Button variant="contained" onClick={() => history.push("/")}>
              X
            </Button>
          )}
        </>
      );
};

export default PokeDetails