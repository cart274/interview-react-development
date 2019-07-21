import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from '../Home/Home.js'
import Login from '../Login/Login.js'
import Header from '../../components/Header/Header.js'

class App extends Component {
  render() {
    return (
      <Router>
        <Header></Header>
        <Route path="/" exact component={Home} />
        <Route path="/login/" component={Login} />
      </Router>
    );
  }
}

export default App;