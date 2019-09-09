import { SET_PRODUCTS } from '../../state/types';

const itemsReducer = (state = [], action) => {
  switch (action.type) {
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