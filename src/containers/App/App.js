import React, { Component, lazy, Suspense  } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from '../../components/Header/Header.js'
import { connect } from 'react-redux';
import {setUser} from '../../state/actions'
import Loader from '../../components/Loader/Loader'
const Home = lazy(() => import('../Home/Home.js'));
const Login = lazy(() => import('../Login/Login.js'));
const Products = lazy(() => import('../Products/Products.js'));

class App extends Component {

  constructor(props){
    super(props);
    let user = sessionStorage.getItem('user');
    if(user)
      this.props.setUser(JSON.parse(user));
  }

  WaitingComponent(Component) {
    return props => (
      <Suspense fallback={<Loader/>}>
        <Component {...props} />
      </Suspense>
    );
  }

  render() {
    return (
      <>
        <Router>
          <Header></Header>          
          <Route path="/" exact component={this.WaitingComponent(Home)} />
          <Route path="/login/" component={this.WaitingComponent(Login)} />
          <Route path="/products/" component={this.WaitingComponent(Products)} />
        </Router>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setUser: (items)=>dispatch(setUser(items)),
})

export default connect(undefined, mapDispatchToProps)(App);