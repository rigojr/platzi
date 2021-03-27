import React from "react";
import { OnCaptureData } from 'react-paypal-button';

// REGULAR INTERFACES

export interface Product {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
}

export interface Buyer {
  name: string | FormDataEntryValue | null;
  email: string | FormDataEntryValue | null;
  address: string | FormDataEntryValue | null;
  apto: string | FormDataEntryValue | null;
  city: string | FormDataEntryValue | null;
  country: string | FormDataEntryValue | null;
  state: string | FormDataEntryValue | null;
  cp: string | FormDataEntryValue | null;
  phone: string | FormDataEntryValue | null;
}

export interface Order {
  buyer: Buyer,
  product: Product[],
  payment: OnCaptureData
}

// COMPONENTS INTERFACES

export interface ILayout {
  children?: React.ReactNode;
}

export interface IProducts {
  products: Product[];
}

export interface IProduct {
  product: Product;
  handleAddToCart: (product: Product) => void
}

// CONTEXT TYPES

export interface IInitialState {
  cart: Product[];
  products: Product[];
  buyer: Buyer;
}

export interface IUseInitialState {
  state: IInitialState;
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  addToBuyer: (buyer: Buyer) => void;
  addNewOrder: (order: Order) => void;
}

// CONSTANTS

export const TITLE_WEB_APP = 'PlatziConf Merch';
export const COPY_RIGHT_TEXT = 'Todos los derechos reservados';
export const INPUT_INFORMATION_PH = {
  NAME: 'Nombre Completo',
  EMAIL: 'Correo Electronico',
  ADDRESS: 'Direccion',
  APT: 'Apto',
  CITY: 'Ciudad,',
  COUNTRY: 'Pais',
  STATE: 'Estado',
  POSTAL_CODE: 'Codigo Postal',
  PHONE: 'Telefono',
}
// TYPES
