import React, { Component } from 'react';
import './Home.module.css';
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
}

export default Home;
