import React, { Component } from "react";
import { Link } from "react-router-dom"
import styles from "./Header.module.css";
import logo from "../../assets/images/images/logo_full_color.svg"
import { Link as LinkScroll } from 'react-scroll'


class Header extends Component {
  render() {

    return (
      <section className={styles.header}>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <img src={logo} alt="Logo" />
              </Link>
            </li>
            <li>
              <LinkScroll  activeClass="active" to="welcome" spy={true} smooth={true} offset={-100} duration={500} >
                <Link to="/#welcome">Inicio</Link>
              </LinkScroll>
            </li>
            <li>
              <LinkScroll activeClass="active" to="technologies" spy={true} smooth={true} offset={-80} duration={500} >
                <Link to="/#technologies">Tecnologías</Link>
              </LinkScroll>
            </li>
            <li>
              <LinkScroll activeClass="active" to="benefits" spy={true} smooth={true} offset={-80} duration={500} >
                <Link to="/#benefits">Beneficios</Link>
              </LinkScroll>
            </li>
            <li>
              <LinkScroll activeClass="active" to="requirements" spy={true} smooth={true} offset={-80} duration={500} >
                <Link to="/#requirements">Requerimientos</Link>
              </LinkScroll>
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
