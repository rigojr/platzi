import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { IMarket } from '../../common/type';
import colors from '../../res/colors';

const { zircon, white } = colors;

const CoinMarketDetail: React.FC<IMarket> = ({ name, price_usd }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.priceText}>${price_usd.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderColor: zircon,
    borderWidth: 1,
    padding: 16,
    marginRight: 8,
    textAlign: 'center',
  },
  nameText: {
    color: white,
    fontWeight: 'bold',
  },
  priceText: {
    color: white,
  },
});

export default CoinMarketDetail;
