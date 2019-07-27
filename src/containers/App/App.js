import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from '../Home/Home.js'
import Login from '../Login/Login.js'
import Header from '../../components/Header/Header.js'
import Loader from '../../components/Loader/Loader.js'
import Products from '../Products/Products.js';
import { connect } from 'react-redux';
import {setUser} from '../../state/actions'
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary'

class App extends Component {

  constructor(props){
    super(props);
    let user = sessionStorage.getItem('user');
    if(user)
      this.props.setUser(JSON.parse(user));
  }

  render() {
    return (
      <>
        <Router>
          <ErrorBoundary>
            <Header></Header>
          </ErrorBoundary>
          
          <Route path="/" exact component={Home} />
          <Route path="/login/" component={Login} />
          <Route path="/products/" component={Products} />
        </Router>
        <Loader></Loader>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setUser: (items)=>dispatch(setUser(items)),
})

export default connect(undefined, mapDispatchToProps)(App);