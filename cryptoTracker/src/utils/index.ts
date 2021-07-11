export const getSymbolIcon = (name: string) => {
  const symbol = name.toLowerCase().replace(' ', '-');
  return `https://c1.coinlore.com/img/25x25/${symbol}.png`;
};