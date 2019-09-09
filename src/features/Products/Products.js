import React, { useState } from 'react';
import style from './Products.module.css'
import request from '../../utils/request'
import {setProducts} from './actions'
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import ProductsList from '../../components/ProductList/ProductList'
import WithLoader from '../../components/WithLoader/WithLoader'
const ProductsListWithLoader = WithLoader(ProductsList);

const Products = async (props) => {

  const [products, setProductsState] = useState( [] );
  const [loading, setLoadingState] = useState( true );

  if(!props.user.hasOwnProperty('email')){
    props.history.push('/login')
  }
  
  let productRequest = await request('get','products')
  setProductsState(productRequest);
  setLoadingState(false)
  props.setProducts(productRequest);  

  const filterProducts = (e) =>{
    let { value = ''} = e.target,
        {products} = props;

    let productsFiltered = products.filter(product=> {
      let filter = true;
      for(let i =0; i< value.length; i++){
        if(product.name[i].toLowerCase() !== value[i].toLowerCase())
          filter = false;
      }
      return filter;
    })

    setProductsState({products:productsFiltered});
  }

    return (
      <>
        <Header useScroll={false}></Header>
        <section className={style.products}>
          <h1>Productos</h1>
          <div className={style.searchProducts}>
            <input type="text" placeholder="Buscar" onChange={(e) => filterProducts(e)}/>
          </div>
          <ProductsListWithLoader isLoading={loading} products={products}></ProductsListWithLoader>
        </section>
      </>
    );
  
}

const mapStateToProps = state => ({
  products: state.products,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  setProducts: (items)=>dispatch(setProducts(items))
})

export default connect(mapStateToProps, mapDispatchToProps)(Products);