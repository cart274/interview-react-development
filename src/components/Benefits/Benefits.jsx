import React, { Component } from "react";
import benefitsStyle from "./Benefits.module.css";

class Benefits extends Component {
  render() {
    return (
      <section className={benefitsStyle.benefits} id="benefits">
        <h2>Entre los beneficios que ofrecemos se encuentran <span>;)</span></h2>
        <ul>
          <li>Flexibilidad Horaria</li>
          <li>Home Office</li>
          <li>Capacitaciones y workshops</li>
          <li>Snacks, frutas y bebidas gratis</li>
          <li>Semana Remota</li>
          <li>Trabajar en últimas tecnologías</li>
        </ul>
      </section>
    );
  }
}

export default Benefits;
