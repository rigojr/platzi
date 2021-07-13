import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, Image, StyleSheet, SectionList, FlatList, Pressable, Alert } from 'react-native';
import { CoinDetailProps } from '../../common/RootStackParams';
import { ICoin } from '../../common/type';
import usePayLoading from '../../hooks/usePayloading';
import Http from '../../libs/http';
import colors from '../../res/colors';
import { getSymbolIcon } from '../../utils';
import CoinMarketDetail from './CoinMarketDetail';
import Storage from '../../libs/storage';

const { charade, white, picton, carmine } = colors;

const CoinDetailScreen: React.FC<CoinDetailProps> = ({
  navigation,
  route: {
    params: { coin },
  },
}) => {
  const { setOptions } = navigation;
  const { id, name, symbol, market_cap_usd, volume24, percent_change_24h } = coin as ICoin;
  const [markets, loading, setMarkets, setLoading] = usePayLoading([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const key = `favorite-${id}`;

  useEffect(() => {
    setOptions({ title: symbol });
  }, [coin]);

  useEffect(() => {
    setLoading(true);
    Http.instance
      .get(`https://api.coinlore.net/api/coin/markets/?id=${id}`)
      .then(resp => {
        setMarkets(resp);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(err);
      });
  }, [coin]);

  useEffect(() => {
    Storage.instance
      .get(key)
      .then(res => {
        if (res) setIsFavorite(true);
      })
      .catch(err => console.log(err));
  }, [coin]);

  const getSections = useMemo(() => {
    const sections = [
      {
        title: 'Market cap',
        data: [market_cap_usd],
      },
      {
        title: 'Volume 24h',
        data: [volume24],
      },
      {
        title: 'Change 24h',
        data: [percent_change_24h],
      },
    ];
    return sections;
  }, [coin]);

  const handleFavorite = () => {
    if (isFavorite) {
      removeFavorite();
    } else {
      addFavorite();
    }
  };

  const addFavorite = async () => {
    const stringCoin = JSON.stringify(coin);
    const stored = await Storage.instance.store(key, stringCoin);
    if (stored) setIsFavorite(stored);
  };

  const removeFavorite = () => {
    Alert.alert('Remove favorite', 'Are you sure?', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Remove',
        onPress: async () => {
          const removed = await Storage.instance.remove(key);
          if (removed) setIsFavorite(!removed);
        },
        style: 'destructive',
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <View style={styles.row}>
          <Image style={styles.iconImage} source={{ uri: getSymbolIcon(name) }} />
          <Text style={styles.titleText}>{name}</Text>
        </View>
        <Pressable onPress={handleFavorite} style={[styles.btnFavorite, isFavorite ? styles.btnFavoriteRemove : styles.btnFavoriteAdd]}>
          <Text style={styles.btnFavoriteText}>{isFavorite ? 'Remove Favorite' : 'Add Favorite'}</Text>
        </Pressable>
      </View>
      <SectionList
        style={styles.section}
        sections={getSections}
        renderItem={({ item }) => (
          <View style={styles.sectionItem}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionText}>{section.title}</Text>
          </View>
        )}
        keyExtractor={item => item}
      />
      <Text style={styles.marketTitle}>Markets</Text>

      <FlatList
        keyExtractor={(item, i) => `${item}-${i}`}
        style={styles.list}
        horizontal
        data={markets}
        renderItem={({ item }) => <CoinMarketDetail {...item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: white,
    marginLeft: 8,
  },
  container: {
    flex: 1,
    backgroundColor: charade,
  },
  row: {
    flexDirection: 'row',
  },
  subHeader: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconImage: {
    width: 25,
    height: 25,
  },
  sectionHeader: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    padding: 8,
  },
  sectionItem: {
    padding: 8,
  },
  itemText: {
    color: white,
    fontSize: 14,
  },
  sectionText: {
    color: white,
    fontWeight: 'bold',
    fontSize: 14,
  },
  section: {
    maxHeight: 220,
  },
  list: {
    maxHeight: 100,
    marginHorizontal: 16,
  },
  marketTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 16,
    color: white,
    marginBottom: 16,
  },
  btnFavorite: {
    padding: 8,
    borderRadius: 8,
  },
  btnFavoriteAdd: {
    backgroundColor: picton,
  },
  btnFavoriteRemove: {
    backgroundColor: carmine,
  },
  btnFavoriteText: {
    color: white,
  },
});

export default CoinDetailScreen;