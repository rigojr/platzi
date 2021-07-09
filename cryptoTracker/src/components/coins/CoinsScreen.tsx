import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, FlatList } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../common/RootStackParams';
import Http from '../../libs/http';
import CoinItem from './CoinItem';
import colors from '../../res/colors';
import { ICoin } from '../../common/type';
interface ICoinDetailScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'CoinMain'>;
}

const { charade } = colors;

const CoinsScreen: React.FC<ICoinDetailScreenProps> = ({ navigation }) => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Http.instance
      .get('https://api.coinlore.net/api/tickers/')
      .then(resp => {
        setCoins(resp.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const handlePress = (coin: ICoin) => {
    if (navigation) navigation.navigate('CoinDetail', { coin });
  };

  return (
    <View style={styles.container}>
      <Text>Coins Screen</Text>
      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator color="#3b3b3b" size="large" />
        </View>
      ) : (
        <FlatList data={coins} renderItem={({ item }) => <CoinItem {...item} onPress={() => handlePress(item)} />} />
      )}
    </View>
  );
};

export default CoinsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: charade,
  },
  btn: {
    padding: 8,
    backgroundColor: 'blue',
    borderRadius: 8,
    margin: 16,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
  },
  loaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
