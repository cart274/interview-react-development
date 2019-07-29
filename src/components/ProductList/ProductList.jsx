import React from 'react';
import { useTranslation } from "react-i18next";
import style from './ProductList.module.css'


const ProductList = (props) =>{
  const {t}= useTranslation();
  return(
    <section className={style.productsList}>
    {
      Array.isArray(props.products) && props.products.map( ({ id = 0, sku = '', name = '', price = 0}, key) =>{
      return <article key={key}>
              <img src={ require('../../assets/images/products/' + sku + '.jpg')} alt={name}/>
              <header>
                <h3>({id}) {name}</h3>
                <p>{t('Descripción')} {sku}</p>
                <h4>{t('Precio')}: ${price}</h4>
              </header>
            </article>
      })
    }
    </section>)
}



export default ProductList;