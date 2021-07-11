import React from 'react';
import { Image, StyleSheet, Text, View, Pressable } from 'react-native';
import { ICoin } from '../../common/type';
import Assets from '../../assets';
import colors from '../../res/colors';
import { getSymbolIcon } from '../../utils';

interface ICoinItemProps extends ICoin {
  onPress: () => void;
}

const { arrowDown, arrowUp } = Assets;
const { white, zircon } = colors;

const CoinItem: React.FC<ICoinItemProps> = ({ name, symbol, price_usd, percent_change_1h, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.row}>
        <View style={styles.imageContainer}>
          <Image style={styles.iconImage} source={{ uri: getSymbolIcon(name) }} />
        </View>
        <View>
          <Text style={styles.symbolText}>{symbol}</Text>
          <Text style={styles.regularText}>{name}</Text>
          <Text style={styles.symbolText}>${price_usd}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.symbolText}>{percent_change_1h}%</Text>
        <Image style={styles.imgIcon} source={percent_change_1h > 0 ? arrowUp : arrowDown} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 8,
    marginBottom: 20,
    marginHorizontal: 8,
    borderColor: zircon,
    borderBottomWidth: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  symbolText: {
    color: white,
    fontWeight: 'bold',
    fontSize: 14,
    marginRight: 6,
  },
  regularText: {
    color: white,
    fontSize: 12,
    marginRight: 16,
  },
  imgIcon: {
    width: 22,
    height: 22,
  },
  iconImage: {
    width: 25,
    height: 25,
    margin: 10,
  },
  imageContainer: {
    borderRadius: 50,
    backgroundColor: zircon,
    marginHorizontal: 8,
  },
});

export default CoinItem;
