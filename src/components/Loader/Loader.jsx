import React from 'react';
import style from './Loader.module.css'
import loader from "../../assets/images/images/loader.gif"

const Loader = () => {
    return(
    <div className={style.loader}>
        <img src={loader} alt="Loader"/>
        <h4>Cargando...</h4>
    </div>
    )
}
export default Loader