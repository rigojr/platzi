import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FavoritesScreen from './FavoritesScreen';
import CoinDetailScreen from '../CoinDetail/CoinDetailScreen';
import colors from '../../res/colors';

const { Navigator, Screen } = createStackNavigator();

const { blackPearl, white } = colors;

const FavoritesStack: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: blackPearl,
          shadowColor: blackPearl,
        },
        headerTintColor: white,
      }}
    >
      <Screen name="Favorites" component={FavoritesScreen} />
      <Screen name="CoinDetail" component={CoinDetailScreen} />
    </Navigator>
  );
};

export default FavoritesStack;
