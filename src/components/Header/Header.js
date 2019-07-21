import React, { Component } from "react";
import { Link } from "react-router-dom"
import styles from "./Header.module.css";
import logo from "../../assets/images/images/logo_full_color.svg"


class Header extends Component {
  render() {

    return (
      <section className={styles.header}>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <img src={logo} />
              </Link>
            </li>
            <li>
              <a href="#welcome">Inicio</a>
            </li>
            <li>
              <a href="#technologies">Tecnologías</a>
            </li>
            <li>
              <a href="#benefits">Beneficios</a>
            </li>
            <li>
              <a href="#requirements">Requerimientos</a>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </section>
    );
  }
}

export default Header;
