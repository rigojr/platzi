import { useState } from 'react';
import initialState from '../initialState';
import { Product, Buyer, Order } from '../common/types';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload: Product) => {
    setState(Object.assign({}, state, { cart: [...state.cart, payload]}));
  }

  const removeFromCart = (payload: Product) => {
    setState(Object.assign({}, state, { cart: state.cart.filter((items: Product) => items.id !== payload.id) }))
  }

  const addToBuyer = (payload: Buyer) => {
    setState(Object.assign({}, state, { buyer: [...state.buyer, payload] }))
  }

  const addNewOrder = (payload: Order) => {
    setState(Object.assign({}, state, { orders: [...state.orders, payload] }))
  }

  return {
    addToCart,
    removeFromCart,
    addToBuyer,
    addNewOrder,
    state
  }
};

export default useInitialState;