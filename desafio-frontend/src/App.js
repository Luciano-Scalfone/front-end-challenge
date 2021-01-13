import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import paginaInicial from './routes/paginaInicial';
import interna from './routes/interna';
import './sass/App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={paginaInicial} />
        <Route path="/interna" component={ interna } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
