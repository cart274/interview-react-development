import React from "react";
import { useTranslation } from "react-i18next";
import style from "./Requirements.module.css";

const Requirements = ()=> {
  const {t}= useTranslation();

  return (
    <section className={style.requirements}>
      <div>
        <h2>{t('Requerimientos')}</h2>
      </div>
      <div>
        <ul>
          <li>{t('Estudiantes avanzados o recibidos de carreras del rubro informático, sistemas o electrónicos')}.</li>
          <li>{t('Inglés intermedio/avanzado')}</li>
          <li>{t('Conocimiento en metodologías ágiles (deseable)')}</li>
        </ul>
      </div>
    </section>
  );
}

export default Requirements;
