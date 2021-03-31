import { Product } from '../common/types';

export const handleSumTotal = (cart: Product[]) => {
  return cart.reduce((acc, curr) => acc + curr.price,0)
}