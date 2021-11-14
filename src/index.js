import React from 'react';
import ReactDOM from 'react-dom'; 
import { BrowserRouter } from 'react-router-dom'

// import Sobre from './pages/Sobre';
import './index.css'
import Routes from './routes';

ReactDOM.render(
  <BrowserRouter>
      <Routes />
  </BrowserRouter>,
  document.getElementById('root')
);