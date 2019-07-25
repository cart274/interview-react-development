import React, { Component } from 'react';
import style from './Products.module.css'
import request from '../../utils/request'


class Products extends Component {

  constructor(props){
    super(props);

    this.state = {
      products: []
    }
  }

  async componentDidMount(){
    let products = await request('get','products')

    this.setState({products});
  }

  render() {
    let {products} = this.state;
    debugger;
    return (
      <section className={style.products}>
        <h1>Products</h1>
        <div className={style.searchProducts}>
          <input type="text" placeholder="Buscar"/>
        </div>
        <section className={style.productsList}>
          {
            Array.isArray(products) && products.map( ({ id = 0, sku = '', name = '', price = 0}, key) =>{
            return <article key={key}>
                    <img src="" alt={name}/>
                    <header>
                      <h3>{name}</h3>
                      <p>Descripción {sku}</p>
                      <p>id {id}</p>
                      <h4>Precio: ${price}</h4>
                    </header>
                  </article>
            })
          }
          <article>
            <img src="" alt="Products"/>
            <header>
              <h3>Nombre</h3>
              <p>Descripción</p>
              <h4>Precio: $5.000</h4>
            </header>
          </article>
          <article>
            <img src="" alt="Products"/>
            <header>
              <h3>Nombre</h3>
              <p>Descripción</p>
              <h4>Precio: $5.000</h4>
            </header>
          </article>
          <article>
            <img src="" alt="Products"/>
            <header>
              <h3>Nombre</h3>
              <p>Descripción</p>
              <h4>Precio: $5.000</h4>
            </header>
          </article>
        </section>
      </section>
    );
  }
}

export default Products;