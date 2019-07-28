import React from 'react';
import style from './ProductList.module.css'


const ProductList = (props) => 
    <section className={style.productsList}>
    {
      Array.isArray(props.products) && props.products.map( ({ id = 0, sku = '', name = '', price = 0}, key) =>{
      return <article key={key}>
              <img src={ '/products/' + sku + '.jpg'} alt={name}/>
              <header>
                <h3>({id}) {name}</h3>
                <p>Descripción {sku}</p>
                <h4>Precio: ${price}</h4>
              </header>
            </article>
      })
    }
    </section>



export default ProductList;