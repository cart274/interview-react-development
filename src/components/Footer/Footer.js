import React, { Component } from "react";
import style from "./Footer.module.css";
import Button from "../Button/Button";
import logoFooter from "../../assets/images/icons/Ic_Wolox_Footer.svg"

class Footer extends Component {
  render() {
    return (
      <section className={style.footer}>
        <h2>Gracias por  <span> completar el ejercicio</span></h2>
        <h3>Te invitamos a ver mas información</h3>
        <Button btnType="primary" text="Conocer más"></Button>
        <img src={logoFooter} alt="Footer"/>
      </section>
    );
  }
}

export default Footer;
