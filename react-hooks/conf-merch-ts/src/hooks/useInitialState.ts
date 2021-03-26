import { useState } from 'react';
import initialState from '../initialState';
import { Product } from '../common/types';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload: Product) => {
    setState(Object.assign({}, state, { cart: [...state.cart, payload]}));
  }

  const removeFromCart = (payload: Product) => {
    setState(Object.assign({}, state, { cart: state.cart.filter((items: Product) => items.id !== payload.id) }))
  }

  return {
    addToCart,
    removeFromCart,
    state
  }
};

export default useInitialState;