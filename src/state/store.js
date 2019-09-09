import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import user from '../features/Login/reducers'
import products from '../features/Products/reducers'

const combinedReducers = combineReducers({
    user,
    products
})

const store = createStore( combinedReducers, applyMiddleware(thunk) )

export default store;