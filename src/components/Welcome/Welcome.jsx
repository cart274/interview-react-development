import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Welcome.module.css";
import slide from "../../assets/images/images/Ic_ilustra_Hero.png"

const Welcome = ()=>{

  const {t}= useTranslation();
  return (
    <section className={styles.welcome}>
      <div>
        <h1>{t('Bienvenido a tu ')}
          <strong> {t('Entrevista Técnica')} </strong>
            {t('en')} <span> Wolox</span>
        </h1>
      </div>
      <div>
        <img src={slide} alt="Wolox"/>
      </div>
    </section>
  );
  
}

export default Welcome;
