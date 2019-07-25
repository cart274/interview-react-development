import { applyMiddleware, createStore } from 'redux';
import itemsReducer from './reducers'

const store = createStore( itemsReducer, {show: false, products:[]})

export default store;