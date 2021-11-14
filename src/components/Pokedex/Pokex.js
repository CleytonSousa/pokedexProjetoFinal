import React from "react";
import Pagination from "../Pagination/Pagination";
import Pokemon from "../Pokemon/Pokemon";
import './Pokedex.css'

const Pokedex = (props) => {
    const { pokemons, page, setPage, total } = props;

   const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  };

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total - 1);
    setPage(nextPage);
  };

    return(
        <div className="page-container">
        <div>
            <Pagination
                page={page + 1}
                totalPages={total}
                onLeftClick={lastPage}
                onRightClick={nextPage}
            />
        </div>
           <div className='pokedexGrid' id="pokedexContainer">
               {pokemons.map((pokemon, idx) => {
                   return(
                       <Pokemon pokemon={pokemon} key={pokemon.name} />
                   )
               })}
           </div>
        </div>
    )
}

export default Pokedex;