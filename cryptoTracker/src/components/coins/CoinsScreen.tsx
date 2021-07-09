import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, StyleSheet, FlatList } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../common/RootStackParams';
import { ICoin } from '../../common/type';
import Http from '../../libs/http';
interface ICoinDetailScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'CoinMain'>;
}

const CoinsScreen: React.FC<ICoinDetailScreenProps> = ({ navigation }) => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    Http.instance
      .get('https://api.coinlore.net/api/tickers/')
      .then(resp => {
        console.log(resp.data);
        setCoins(resp.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handlePress = () => {
    if (navigation) navigation.navigate('CoinDetail');
  };

  return (
    <View style={styles.container}>
      <Text>Coins Screen</Text>
      <FlatList
        data={coins}
        renderItem={({ item }) => {
          const coin = item as ICoin;
          return (
            <View>
              <Text>{coin.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default CoinsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
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
});
