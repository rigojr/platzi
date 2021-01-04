// reducer.js
// Aquí también debemos importar los tipos de acciones para usarlas en el switch
import { ADD, DECREASE } from './types'

export const reducer = (state, action) => {
  switch(action.type) {
    case ADD:
      return {
        count: state.count + 1
      }    
    case DECREASE:
      return {
        count: state.count - 1
      }
    default:
      return state
  }
}