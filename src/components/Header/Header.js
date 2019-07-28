import React, { Component } from "react";
import { Link } from "react-router-dom"
import styles from "./Header.module.css";
import logo from "../../assets/images/images/logo_full_color.svg"
import { Link as LinkScroll } from 'react-scroll'
import { connect } from 'react-redux';
import { useTranslation } from "react-i18next";

const Header = (props) =>{
  const {t, i18n}= useTranslation();
  let {user} = props;
  let lastMenuItem = {
    text: t('login'),
    path: '/login'
  }

  if(user.hasOwnProperty('name')){
    lastMenuItem = {
      text: t('Products'),
      path: '/products'
    }
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
              <Link to="/#welcome">{t('Home')}</Link>
            </LinkScroll>
          </li>
          <li>
            <LinkScroll activeClass="active" to="technologies" spy={true} smooth={true} offset={-80} duration={500} >
              <Link to="/#technologies">{t('Technologies')}</Link>
            </LinkScroll>
          </li>
          <li>
            <LinkScroll activeClass="active" to="benefits" spy={true} smooth={true} offset={-80} duration={500} >
              <Link to="/#benefits">{t('Benefits')}</Link>
            </LinkScroll>
          </li>
          <li>
            <LinkScroll activeClass="active" to="requirements" spy={true} smooth={true} offset={-80} duration={500} >
              <Link to="/#requirements">{t('Requirements')}</Link>
            </LinkScroll>
          </li>
          <li>
            <Link to={lastMenuItem.path}> {lastMenuItem.text} </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}


const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Header);
