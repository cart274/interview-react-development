import React from "react";
import { useTranslation } from "react-i18next";
import techStyle from "./Technologies.module.css";
import icons from "../../assets/images/icons/Ic_Tecnologys.svg"
import Button from "../Button/Button";


const Technologies = ()=>{

  const {t}= useTranslation();
  return (
    <section className={techStyle.technologies}>
      <div className={techStyle.techText}>
        <h2>{t('Estamos buscando para incorporar gente increíble para estas tecnologías:')}</h2>
      </div>
      <div className={techStyle.techIcons}>
        <img src={icons} alt="Technologies" />
      </div>
      <div className={techStyle.woloxers}>
        <h2>350 + <span>Woloxers</span></h2>
        <div className={techStyle.twitter}>@Wolox</div>
        <Button text="Siguenos" btnType="secondary"></Button>
      </div>
      <div className={techStyle.followText}>
        <h2>Trabajamos para 
          <strong> convertir</strong>
          <span> ideas </span>
          en productos.
        </h2>
      </div>
    </section>
  );
}

export default Technologies;
