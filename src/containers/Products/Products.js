import React, { Component } from 'react';
import style from './Products.module.css'


class Products extends Component {
  render() {
    return (
      <section className={style.products}>
        <h1>Products</h1>
        <div className={style.searchProducts}>
          <input type="text" placeholder="Buscar"/>
        </div>
        <section className={style.productsList}>
          <article>
            <img src=""/>
            <header>
              <h3>Nombre</h3>
              <p>Descripción</p>
              <h4>Precio: $5.000</h4>
            </header>
          </article>
          <article>
            <img src=""/>
            <header>
              <h3>Nombre</h3>
              <p>Descripción</p>
              <h4>Precio: $5.000</h4>
            </header>
          </article>
          <article>
            <img src=""/>
            <header>
              <h3>Nombre</h3>
              <p>Descripción</p>
              <h4>Precio: $5.000</h4>
            </header>
          </article>
          <article>
            <img src=""/>
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