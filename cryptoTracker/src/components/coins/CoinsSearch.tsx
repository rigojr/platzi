import React, { useState } from 'react';
import { Platform, StyleSheet, TextInput, View } from 'react-native';
import colors from '../../res/colors';

const { blackPearl, zircon, white } = colors;

interface ICoinsSearchProps {
  onChange: (query: string) => void;
}

const CoinsSearch: React.FC<ICoinsSearchProps> = ({ onChange }) => {
  const [query, setQuery] = useState('');

  const handleText = (query: string) => {
    setQuery(query);
    onChange(query);
  };

  return (
    <View>
      <TextInput
        style={[styles.textInput, Platform.OS === 'ios' ? styles.textInputIos : styles.textInputAndroid]}
        onChangeText={handleText}
        value={query}
        placeholder="Search Coin"
        placeholderTextColor={'#fff'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 46,
    backgroundColor: blackPearl,
    paddingLeft: 16,
    color: white,
  },
  textInputAndroid: {
    borderWidth: 2,
    borderBottomColor: zircon,
  },
  textInputIos: {
    margin: 8,
    borderRadius: 8,
  },
});

export default CoinsSearch;
