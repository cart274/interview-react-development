import React, { Component } from 'react';
import style from './Products.module.css'
import request from '../../utils/request'
import {setProducts} from '../../state/actions'
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import ProductsList from '../../components/ProductList/ProductList'
import WithLoader from '../../components/WithLoader/WithLoader'
const ProductsListWithLoader = WithLoader(ProductsList);

class Products extends Component {

  constructor(props){
    super(props);

    this.state = {
      products: [],
      loading: false
    }
  }

  async componentDidMount(){
    this.setState({loading: true})
    let products = await request('get','products')
    this.setState({loading: false})
    this.props.setProducts(products);
    this.setState({products});
  }

  filterProducts(e){
    let { value = ''} = e.target,
        {products} = this.props;

    let productsFiltered = products.filter(product=> {
      let filter = true;
      for(let i =0; i< value.length; i++){
        if(product.name[i].toLowerCase() !== value[i].toLowerCase())
          filter = false;
      }
      return filter;
    })

    this.setState({products:productsFiltered});
  }

  render() {
    let {products, loading} = this.state;
    return (
      <>
        <Header useScroll={false}></Header>
        <section className={style.products}>
          <h1>Productos</h1>
          <div className={style.searchProducts}>
            <input type="text" placeholder="Buscar" onChange={(e) => this.filterProducts(e)}/>
          </div>
          <ProductsListWithLoader isLoading={loading} products={products}></ProductsListWithLoader>
        </section>
      </>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products
});

const mapDispatchToProps = dispatch => ({
  setProducts: (items)=>dispatch(setProducts(items))
})

export default connect(mapStateToProps, mapDispatchToProps)(Products);