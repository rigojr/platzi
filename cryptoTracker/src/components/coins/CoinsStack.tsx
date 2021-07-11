import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CoinsScreen from './CoinsScreen';
import CoinDetailScreen from '../CoinDetail/CoinDetailScreen';
import colors from '../../res/colors';

const { Navigator, Screen } = createStackNavigator();
const { blackPearl, white } = colors;

const CoinsStack: React.FC = () => {
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
      <Screen name="Coins" component={CoinsScreen} />
      <Screen name="CoinDetail" component={CoinDetailScreen} />
    </Navigator>
  );
};

export default CoinsStack;
