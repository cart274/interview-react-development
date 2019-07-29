import { createStore } from 'redux';
import itemsReducer from './reducers'

const store = createStore( itemsReducer, { products:[], user:{}})

export default store;