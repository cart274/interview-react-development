import React, { Component } from 'react';
import './Home.module.css';
import Header from '../../components/Header/Header';
import Technologies from '../../components/Technologies/Technologies'
import Benefits from '../../components/Benefits/Benefits';
import Requirements from '../../components/Requirements/Requirements';
import Footer from '../../components/Footer/Footer';
import Welcome from '../../components/Welcome/Welcome';
import { Element , Events, scrollSpy } from 'react-scroll'


const Home = (props)=> {

  Events.scrollEvent.register('begin', function(to, element) {});
  Events.scrollEvent.register('end', function(to, element) {});
  scrollSpy.update();


  return (
    <>
      <Header useScroll={true}></Header>
      <Element name="welcome">
        <Welcome/>
      </Element>
      <Element name="technologies">
        <Technologies />
      </Element>
      <Element name="benefits">
        <Benefits/>
      </Element>
      <Element name="requirements">
        <Requirements/>
      </Element>
        <Footer/>
    </>
  );
}

export default Home;
