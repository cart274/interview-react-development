import React from "react";
import { useTranslation } from "react-i18next";
import benefitsStyle from "./Benefits.module.css";

const Benefits = ()=> {
  
  const {t}= useTranslation();

  return (
    <section className={benefitsStyle.benefits}>
      <h2> {t('Entre los beneficios que ofrecemos se encuentran')} <span>;)</span></h2>
      <ul>
        <li>{t('Flexibilidad Horaria')}</li>
        <li>{t('Home Office')}</li>
        <li>{t('Capacitaciones y workshops')}</li>
        <li>{t('Snacks, frutas y bebidas gratis')}</li>
        <li>{t('Semana Remota')}</li>
        <li>{t('Trabajar en últimas tecnologías')}</li>
      </ul>
    </section>
  );
}

export default Benefits;
