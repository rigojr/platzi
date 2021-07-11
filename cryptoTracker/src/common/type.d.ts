export interface ICoin {
  id: string;
  name: string;
  symbol: string;
  price_usd: string;
  percent_change_1h: number;
  market_cap_usd: string;
  volume24: string;
  percent_change_24h: string;
}

export interface IMarket {
  name: string;
  price_usd: string;
}
