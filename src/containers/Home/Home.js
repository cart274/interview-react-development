import React, { Component } from 'react';
import './Home.module.css';
import '../../assets/styles/main.css'
import Technologies from '../../components/Technologies/Technologies'
import Benefits from '../../components/Benefits/Benefits';
import Requirements from '../../components/Requirements/Requirements';
import Footer from '../../components/Footer/Footer';
import Welcome from '../../components/Welcome/Welcome';
import { Element , Events, scrollSpy } from 'react-scroll'


class Home extends Component {
  
  componentDidMount() {

    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    return (
      <>
        <Element name="welcome">
          <Welcome></Welcome>
        </Element>
        <Element name="technologies">
          <Technologies></Technologies>
        </Element>
        <Element name="benefits">
          <Benefits></Benefits>
        </Element>
        <Element name="requirements">
          <Requirements></Requirements>
        </Element>
          <Footer></Footer>
      </>
    );
  }
}

export default Home;
