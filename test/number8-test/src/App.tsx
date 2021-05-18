import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/details">
          <Product />
        </Route>
        <Route path="/">
          <Products />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
