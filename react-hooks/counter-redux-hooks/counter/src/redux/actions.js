// actions.js
// Primero debemos importar los tipos de acciones que creamos
import { ADD, DECREASE } from './types'

export const addCounter = payload => ({
  type: ADD,
  payload
})

export const decreaseCounter = payload => ({
  type: DECREASE,
  payload
})
