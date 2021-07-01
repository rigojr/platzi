import React from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery';
import { Logo } from './components/Logo';
import { Home } from './pages/Home';
import { Router } from '@reach/router';

const App: React.FC = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get('details');
  console.log(detailId);
  return (
    <>
      <GlobalStyle />
      <Logo />
      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <Router>
          <Home path="/" />
          <Home path="/pet/:id" />
        </Router>
      )}
    </>
  );
};

export default App;
