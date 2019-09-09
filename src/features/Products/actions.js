import { SET_PRODUCTS } from '../../state/types';

export const setProducts = (products = [])=>{
  return{
    type: SET_PRODUCTS,
    payload: products    
  }
}
