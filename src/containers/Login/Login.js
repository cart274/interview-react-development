import React, { Component } from 'react';
import Button from '../../components/Button/Button';
import style from './Login.module.css'


class Login extends Component {

  constructor(props){
    super(props)
  }
  
  render() {
    return (
      <section className={style.login}>
        <h1>Login</h1>
        <form>
          <div className={style.leftLogin}>
            <label for="name">Nombre</label>
            <input type="text" placeholder="Nombre" id="name"/>
            <label for="email">Email</label>
            <input type="mail" placeholder="Email" id="email"/>
          </div>
          <div className={style.rightLogin}>
            <label for="lastname">Apellido</label>
            <input type="text"  placeholder="Apellido" id="lastname"/>
            <label for="age">Edad</label>
            <select id="age"></select>
          </div>
          <div className={style.termsLogin}>
            <input type="checkbox" id="terms"></input> 
            <label for="terms">Acepto los términos y condiciones</label>
          </div>
          <div className={style.btnGroup}>
            <Button text="Cancelar" btnType="tertiary"></Button>
            <Button text="Entrar" btnType="primary"></Button>
          </div>
        </form>
      </section>
    );
  }
}

export default Login;