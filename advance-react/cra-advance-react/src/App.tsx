import React from 'react';
import { ListOfCategories } from './components/ListOfCategories';
import { GlobalStyle } from './styles/GlobalStyles';
import { ListOfPhotoCard } from './containers/ListOfPhotoCards';
import { Logo } from './components/Logo';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCard categoryId={2} sampleProp />
    </>
  );
};

export default App;
