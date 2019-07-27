import React, { Component } from 'react';
import style from './Products.module.css'
import request from '../../utils/request'
import {setProducts} from '../../state/actions'
import { connect } from 'react-redux';

class Products extends Component {

  constructor(props){
    super(props);

    this.state = {
      products: []
    }
  }

  async componentDidMount(){
    let products = await request('get','products')
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
    let {products} = this.state;
    return (
      <section className={style.products}>
        <h1>Products</h1>
        <div className={style.searchProducts}>
          <input type="text" placeholder="Buscar" onChange={(e) => this.filterProducts(e)}/>
        </div>
        <section className={style.productsList}>
          {
            Array.isArray(products) && products.map( ({ id = 0, sku = '', name = '', price = 0}, key) =>{
            return <article key={key}>
                    <img src={ 'http://localhost:3001/images/' + sku + '.jpg'} alt={name}/>
                    <header>
                      <h3>({id}) {name}</h3>
                      <p>Descripción {sku}</p>
                      <h4>Precio: ${price}</h4>
                    </header>
                  </article>
            })
          }
        </section>
      </section>
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