import React from "react";

// REGULAR INTERFACES

export interface Product {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
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
  key: string | number;
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
