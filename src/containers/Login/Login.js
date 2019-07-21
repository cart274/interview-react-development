import React, { Component } from 'react';
import Button from '../../components/Button/Button';
import style from './Login.module.css'


class Login extends Component {
  render() {
    return (
      <section className={style.login}>
        <h1>Login</h1>
        <form>
          <div className={style.leftLogin}>
            <label>Nombre</label>
            <input type="text" placeholder="Nombre"/>
            <label>Email</label>
            <input type="mail" placeholder="Email"/>
          </div>
          <div className={style.rightLogin}>
            <label>Apellido</label>
            <input type="text"  placeholder="Apellido"/>
            <label>Edad</label>
            <select></select>
          </div>
          <div className={style.termsLogin}>
            <input type="checkbox"></input> 
            <span>Acepto los términos y condiciones</span>
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