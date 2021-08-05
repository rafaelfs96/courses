import { createStore, combineReducers } from 'redux'

import numerosReducers from './reducers/numeros'

const reducers = combineReducers({
  numeros: numerosReducers
})

export default function storeConfig() {
  return createStore(reducers)
}