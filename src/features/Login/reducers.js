import { SET_USER } from '../../state/types';

const itemsReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state;
  }
}
export default itemsReducer;