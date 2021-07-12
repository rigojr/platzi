import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../res/colors';

const { charade } = colors;

const FavoritesScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Soy Favorite</Text>
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
