import { SET_LOADER, SET_USER, SET_PRODUCTS } from './types';

//Action Creator: funcion que devuelve un objeto "action"
export const setLoader = (show = false)=>{
  return{
    type: SET_LOADER,
    payload: show
  }
}

export const setUser = (user = {})=>{
  return{
    type: SET_USER,
    payload: user    
  }
}

export const setProducts = (products = [])=>{
  return{
    type: SET_PRODUCTS,
    payload: products    
  }
}
//Esta funcion es capturada por Thunk, se ejecuta y luego llama a una action creator
/*export const getResultsItems = (q) => dispatch => {
  mlData.find(q).then(results=>{
    dispatch(setItems(results));
  })
}
*/