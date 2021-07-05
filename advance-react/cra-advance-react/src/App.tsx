import React, { useContext } from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import { Logo } from './components/Logo';
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { Favs } from './pages/Favs';
import { User } from './pages/User';
import { NotRegisteredUser } from './pages/NotRegisteredUser';
import { Router } from '@reach/router';
import { NavBar } from './components/NavBar';
import Context from './context';

const App: React.FC = () => {
  const { isAuth } = useContext(Context.Context);
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path="/" />
        <Home path="/pet/:id" />
        <Detail path="/details/:detailId" />
        {isAuth ? (
          <>
            <Favs path="/favs" />
            <User path="/user" />
          </>
        ) : (
          <>
            <NotRegisteredUser path="/favs" />
            <NotRegisteredUser path="/user" />
          </>
        )}
      </Router>
      <NavBar />
    </>
  );
};

export default App;
