import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import CoinsScreen from './CoinsScreen';
import CoinDetailScreen from './CoinDetailScreen';

const { Navigator, Screen } = createStackNavigator();

const CoinsStack: React.FC = () => {
  return (
    <Navigator>
      <Screen name="Coins" component={CoinsScreen} />
      <Screen name="CoinDetail" component={CoinDetailScreen} />
    </Navigator>
  );
}

export default CoinsStack;