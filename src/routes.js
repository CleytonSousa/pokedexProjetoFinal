import Sobre from './pages/Sobre/Sobre'
import Home from './pages/Home/Home'
import Geracao from './pages/Geracao/Geracao';
import PokeDetails from './components/PokeDetails/PokeDetails';
import Categorias from './pages/Categorias/Categorias';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import React from 'react'


function Routes() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/sobre' component={Sobre} />
                    <Route path='/geracao' component={Geracao} />
                    <Route path="/categorias" component={Categorias}/>
                    <Route
                        path="/:pokemonId"
                        render={(props) => <PokeDetails {...props} />}
                        />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes
