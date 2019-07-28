import { SET_LOADER, SET_USER, SET_PRODUCTS } from './types';

const itemsReducer = (state, action) => {
  switch (action.type) {
    case SET_LOADER:
      return {
        ...state,
        show: action.payload
      }
    case SET_USER:
      return {
        ...state,
        user: action.payload
      }
      case SET_PRODUCTS:
        return {
          ...state,
          products: action.payload
        }
    default:
      return state;
  }
}
export default itemsReducer;