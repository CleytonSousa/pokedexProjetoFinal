import React from 'react'
import Footer from '../../components/Footer/Footer'
import NavMenu from '../../components/Menu/Menu'
import SearchPokemon from '../../components/SearchPokemon/SearchPokemon'

const Geracao = (props) => {
    const {pokemon} = props;
    
    return (
        <div>
            <NavMenu />
            <SearchPokemon />
            <Footer />
        </div>
    )
}

export default Geracao
