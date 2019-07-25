import React, { Component } from "react";
import styles from "./Welcome.module.css";
import slide from "../../assets/images/images/Ic_ilustra_Hero.png"

class Welcome extends Component {
  render() {
    return (
      <section className={styles.welcome} ref="welcome">
        <div>
          <h1>Bienvenido a tu 
            <strong> Entrevista Técnica </strong>
              en <span> Wolox</span>
          </h1>
        </div>
        <div>
          <img src={slide} alt="Wolox"/>
        </div>
      </section>
    );
  }
}

export default Welcome;
