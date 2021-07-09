import { ICoin } from './type';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  CoinDetail: { coin: ICoin };
  CoinMain: undefined;
};

type CoinDetailScreenRouteProp = RouteProp<RootStackParamList, 'CoinDetail'>;

type CoinDetailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'CoinDetail'
>;

export type CoinDetailProps = {
  route: CoinDetailScreenRouteProp;
  navigation: CoinDetailScreenNavigationProp;
};