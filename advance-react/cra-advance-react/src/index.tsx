import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Context from './context';

const client = new ApolloClient({
  uri: 'http://localhost:3500/graphql',
});

ReactDOM.render(
  <Context.Provider>
    <React.StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </React.StrictMode>
  </Context.Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
