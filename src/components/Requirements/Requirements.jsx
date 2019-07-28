import React, { Component } from "react";
import style from "./Requirements.module.css";

class Requirements extends Component {
  render() {
    return (
      <section className={style.requirements} ref="requirements">
        <div>
          <h2>Requerimientos</h2>
        </div>
        <div>
          <ul>
            <li>Estudiantes avanzados o recibidos de carreras del rubro informático, sistemas o electrónicos.</li>
            <li>Inglés intermedio/avanzado</li>
            <li>Conocimiento en metodologías ágiles (deseable)</li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Requirements;
