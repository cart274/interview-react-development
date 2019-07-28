import React from "react";
import { useTranslation } from "react-i18next";
import style from "./Footer.module.css";
import Button from "../Button/Button";
import logoFooter from "../../assets/images/icons/Ic_Wolox_Footer.svg"

const Footer = ()=>{
  const {t}= useTranslation();
  return (
    <section className={style.footer}>
      <h2>{t('Gracias por')} <span> {t('completar el ejercicio')}</span></h2>
      <h3>{t('Te invitamos a ver mas información')}</h3>
      <Button btnType="primary" text={t('Conocer más')}></Button>
      <img src={logoFooter} alt="Footer"/>
    </section>
  );
}

export default Footer;
