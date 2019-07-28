import React from "react";
import { Link } from "react-router-dom"
import styles from "./Header.module.css";
import { Link as LinkScroll } from 'react-scroll'
import { connect } from 'react-redux';
import { useTranslation } from "react-i18next";
import logo from "../../assets/images/images/logo_full_color.svg"
import esflag from "../../assets/images/icons/esflag.jpg"
import enflag from "../../assets/images/icons/enflag.jpg"

const Header = (props) =>{
  const {t, i18n}= useTranslation();
  let {user} = props;
  let lastMenuItem = {
    text: t('Ingresar'),
    path: '/login'
  }

  if(user.hasOwnProperty('name')){
    lastMenuItem = {
      text: t('Productos'),
      path: '/products'
    }
  }

  const changeLanguage = (e)=>{
    e.preventDefault();
    if(i18n.language === 'en')
      i18n.changeLanguage('es');
    else
      i18n.changeLanguage('en');
  }

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
              <Link to="/#welcome">{t('Inicio')}</Link>
            </LinkScroll>
          </li>
          <li>
            <LinkScroll activeClass="active" to="technologies" spy={true} smooth={true} offset={-80} duration={500} >
              <Link to="/#technologies">{t('Tecnologías')}</Link>
            </LinkScroll>
          </li>
          <li>
            <LinkScroll activeClass="active" to="benefits" spy={true} smooth={true} offset={-80} duration={500} >
              <Link to="/#benefits">{t('Beneficios')}</Link>
            </LinkScroll>
          </li>
          <li>
            <LinkScroll activeClass="active" to="requirements" spy={true} smooth={true} offset={-80} duration={500} >
              <Link to="/#requirements">{t('Requerimientos')}</Link>
            </LinkScroll>
          </li>
          <li>
            <Link to={lastMenuItem.path}> {lastMenuItem.text} </Link>
          </li>
        </ul>
      </nav>
      <button className={styles.btnLang} onClick={(e)=>{changeLanguage(e)}}>
        <img  src={i18n.language === 'en' ? esflag :enflag} alt="language"/>
      </button>
    </section>
  );
}


const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Header);
