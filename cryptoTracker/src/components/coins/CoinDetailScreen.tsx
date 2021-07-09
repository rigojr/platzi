import React from 'react';
import { View, Text } from 'react-native';
import { CoinDetailProps } from '../../common/RootStackParams';

const CoinDetailScreen: React.FC<CoinDetailProps> = ({
  route: {
    params: { coin },
  },
}) => {
  console.log(coin);
  return (
    <View>
      <Text>Coin Detail Screen</Text>
    </View>
  );
};

export default CoinDetailScreen;
