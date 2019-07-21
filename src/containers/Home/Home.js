import React, { Component } from 'react';
import './Home.module.css';
import '../../assets/styles/main.css'
import Header from '../../components/Header/Header.js'
import Technologies from '../../components/Technologies/Technologies'
import Benefits from '../../components/Benefits/Benefits';
import Requirements from '../../components/Requirements/Requirements';
import Footer from '../../components/Footer/Footer';
import Welcome from '../../components/Welcome/Welcome';

class Home extends Component {
  render() {
    return (
      <section>
        <Header></Header>
        <Welcome></Welcome>
        <Technologies></Technologies>
        <Benefits></Benefits>
        <Requirements></Requirements>
        <Footer></Footer>
      </section>
    );
  }
}

export default Home;
