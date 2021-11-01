import Sobre from './pages/Sobre/Sobre'
import Home from './pages/Home/Home'
import Geracao from './pages/Geracao/Geracao';
import PokeDetails from './components/PokeDetails/PokeDetails';

import { BrowserRouter, Route } from 'react-router-dom';

import React from 'react'


function Routes() {
    return (
        <div>
            <BrowserRouter>
                <Route path='/' exact component={Home} />
                <Route path='/sobre' component={Sobre} />
                <Route path='/geracao' component={Geracao} />
                <Route
                    exact
                    path="/:pokemonId"
                    render={(props) => <PokeDetails {...props} />}
                    />
            </BrowserRouter>
        </div>
    )
}

export default Routes
