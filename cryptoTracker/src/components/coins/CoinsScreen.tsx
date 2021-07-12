import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, FlatList } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../common/RootStackParams';
import Http from '../../libs/http';
import CoinItem from './CoinItem';
import colors from '../../res/colors';
import { ICoin } from '../../common/type';
import CoinsSearch from './CoinsSearch';
interface ICoinDetailScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'CoinMain'>;
}

const { charade } = colors;

const CoinsScreen: React.FC<ICoinDetailScreenProps> = ({ navigation }) => {
  const [coins, setCoins] = useState<ICoin[]>([]);
  const [loading, setLoading] = useState(false);
  const [filterCoins, setFilterCoins] = useState<ICoin[]>([]);

  useEffect(() => {
    getCoins();
  }, []);

  const getCoins = () => {
    setLoading(true);
    Http.instance
      .get('https://api.coinlore.net/api/tickers/')
      .then(resp => {
        setCoins(resp.data);
        setFilterCoins(resp.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  };

  const handlePress = (coin: ICoin) => {
    if (navigation) navigation.navigate('CoinDetail', { coin });
  };

  const handleSearch = (query: string) => {
    const formattedQuery = query.toLowerCase();
    const newCoins = coins.filter(
      ({ name, symbol }) => name.toLowerCase().includes(formattedQuery) || symbol.toLowerCase().includes(formattedQuery),
    );
    setFilterCoins(newCoins);
  };

  return (
    <View style={styles.container}>
      <CoinsSearch onChange={handleSearch} />
      <Text>Coins Screen</Text>
      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator color="#3b3b3b" size="large" />
        </View>
      ) : (
        <FlatList data={filterCoins} renderItem={({ item }) => <CoinItem {...item} onPress={() => handlePress(item)} />} />
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
