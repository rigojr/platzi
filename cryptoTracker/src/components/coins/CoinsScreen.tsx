import React, { Component } from 'react'
import { View, Text, Pressable, StyleSheet, NavigatorIOS } from 'react-native';
import { RouteProp } from '@react-navigation/native';


interface ICoinDetailScreenProps {
  navigation: StackNavigationProp
}

const CoinsScreen: React.FC<> = () => {
  return (
    
  );
}

export default CoinsScreen;

// class CoinsScreen extends Component {

//   handlePress = () => {
//     console.log("go to details", this.props);
//     const { navigation } = this.props;
//     if (navigation) navigation.navigate('CoinDetail')
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>
//           Coins Screen
//         </Text>
//         <Pressable onPress={this.handlePress} style={styles.btn}>
//           <Text style={styles.btnText}>Ir a detail</Text>
//         </Pressable>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red"
  },
  btn: {
    padding: 8,
    backgroundColor: "blue",
    borderRadius: 8,
    margin: 16
  },
  btnText: {
    color: "#fff",
    textAlign: "center"
  }
})

// export default CoinsScreen;