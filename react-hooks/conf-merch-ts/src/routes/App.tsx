import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import { Home, Checkout, Information, Payment, Success, NotFound } from '../containers';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

const App: React.FC = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/checkout/information" component={Information} />
          <Route exact path="/checkout/payment" component={Payment} />
          <Route exact path="/checkout/success" component={Success} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;