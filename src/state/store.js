import { createStore } from 'redux';
import itemsReducer from './reducers'

const store = createStore( itemsReducer, {show: false, products:[], user:{}})

export default store;