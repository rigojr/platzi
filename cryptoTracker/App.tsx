import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CoinsStack from './src/components/Coins/CoinsStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Icons from './src/assets';
import colors from './src/res/colors';
import FavoritesStack from './src/components/Favorites/FavoritesStack';

const { Navigator, Screen } = createBottomTabNavigator();
const { bank, star } = Icons;
const { blackPearl } = colors;

const App = () => {
  return (
    <NavigationContainer>
      <Navigator
        tabBarOptions={{
          style: {
            backgroundColor: blackPearl,
            paddingTop: 8,
          },
        }}
      >
        <Screen
          name="Coins"
          component={CoinsStack}
          options={{
            tabBarIcon: ({ size, color }) => <Image style={{ tintColor: color, width: size, height: size }} source={bank} />,
          }}
        />
        <Screen
          name="Favorites"
          component={FavoritesStack}
          options={{
            tabBarIcon: ({ size, color }) => <Image style={{ tintColor: color, width: size, height: size }} source={star} />,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
