
import './PokeDetailsStyle.js';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Load from '../LoadScreen/Load';
import { Link } from 'react-router-dom';
import {Pokeball} from '../PokeballClick/PokeballClick'

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
            console.log(data)
          })
          .catch(function (error) {
            console.log(error);
          });
      }, [pokemonId]);

     setTimeout(() => {
       console.log("test")
       setPokeClick(false)
     }, 2500)



      const generatePokemonJSX = (pokemon) => {
        const { name, id, species, height, weight, types, sprites } = pokemon;
        const fullImageUrl = `https://cdn.traction.one/pokedex/pokemon/${id}.png`;
        return (
          <Container>
          {clickPoke ? <Pokeball /> : 
          
          <>
          <Container>
             <div className='pokemonInfos'>
            <div>
                <h1>
                {(name)}
                </h1>
            <div className='types'>
                <p style={{fontSize: '20px', marginTop: '5px'}}>Tipos: </p> {types.map((typeInfo) => {
                const { type } = typeInfo;
                const { name } = type;
                return <Types id={name} key={name}> {`${name}`} </Types>;
                })}
            </div>
            </div>
          </div>

            <div className='pokemonImage'>
                
                {Load ? <img src={fullImageUrl} alt='pokemon' /> : ''}
            </div>

            
            <div className='moreInfos'>
                <h3>Pokemon Info</h3>
                <h1>
                {species.name}
                </h1>
                <h3>Height: {height} </h3>
                <h3>Weight: {weight} </h3>

               <StatsDiv>
                    <p>HP:  {pokemon.stats[0].base_stat}</p>
                    <span></span>
               </StatsDiv>

               <StatsDiv>
                <p>ATTACK:  {pokemon.stats[1].base_stat}</p>
                    <span></span>
               </StatsDiv>

               <StatsDiv>
                    <p>DEFENSE:  {pokemon.stats[2].base_stat}</p>
                   <span></span>
               </StatsDiv>

                <StatsDiv>
                    <p>SPECIAL-ATTACK:  {pokemon.stats[3].base_stat}</p>
                    <span></span>
                </StatsDiv>

                <StatsDiv>
                    <p>SPECIAL-DEFENSE:  {pokemon.stats[4].base_stat}</p>
                    <span style={{width: `${pokemon.stats[4].base_stat}`}}></span>
                </StatsDiv>

                <StatsDiv>
                    <p>SPEED:  {pokemon.stats[5].base_stat}</p>
                    <span style={{width: ''}}></span>
                </StatsDiv>
            </div> 
          </Container>
          </>}
          </Container>
        );
      };


      return (
        <>
          {pokemon === undefined && <><h1>Error, pokemon not found!</h1> <Load /> <button onClick={() => history.push('/')}>Return Home</button></>}
          {pokemon !== undefined && pokemon && generatePokemonJSX(pokemon)}
          {pokemon === false && <h1> Pokemon not found</h1>}
    
          {pokemon !== undefined && (
            <Button variant="contained" onClick={() => history.push("/")}>
              back to pokedex
            </Button>
          )}
        </>
      );
};

export default PokeDetails