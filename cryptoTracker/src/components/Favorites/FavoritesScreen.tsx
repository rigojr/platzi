import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { RootStackParamList } from '../../common/RootStackParams';
import { ICoin } from '../../common/type';
import Storage from '../../libs/storage';
import colors from '../../res/colors';
import CoinsItem from '../Coins/CoinItem';

const { charade } = colors;

interface IFavoriteScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'CoinDetail'>;
}

const FavoritesScreen: React.FC<IFavoriteScreenProps> = ({ navigation }) => {
  const [fav, setFav] = useState<ICoin[]>([]);

  useEffect(() => {
    navigation.addListener('focus', getFavorites);
    return () => {
      navigation.removeListener('focus', getFavorites);
    };
  }, []);

  const getFavorites = async () => {
    try {
      const keys = await (await Storage.instance.getAllKeys()).filter(key => key.includes('favorite-'));
      const favs = await Storage.instance.multiGet(keys);
      setFav(favs.map(fav => JSON.parse(fav[1] ?? '')));
    } catch (error) {
      console.log('Error getting favorites');
    }
  };

  const handlePress = (coin: ICoin) => {
    if (navigation) navigation.navigate('CoinDetail', { coin });
  };

  return (
    <View style={styles.container}>
      {fav.length === 0 ? (
        <Text>Please add favorites</Text>
      ) : (
        <FlatList data={fav} renderItem={({ item }) => <CoinsItem {...item} onPress={() => handlePress(item)} />} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: charade,
    flex: 1,
    justifyContent: 'center',
  },
});

export default FavoritesScreen;
