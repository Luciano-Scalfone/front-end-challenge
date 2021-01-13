import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PaginaInicial from './routes/PaginaInicial';
import Interna from './routes/Interna';
import './sass/App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PaginaInicial} />
        <Route path="/interna" component={ Interna } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
