import { SET_USER } from '../../state/types';

export const setUser = (user = {})=>{
  return{
    type: SET_USER,
    payload: user    
  }
}
