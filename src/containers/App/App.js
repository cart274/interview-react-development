import React, { Component, lazy, Suspense  } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';
import {setUser} from '../../state/actions';
import Loader from '../../components/Loader/Loader';
import '../../assets/styles/main.css'
const Header = lazy(() => import('../../components/Header/Header'));
const Home = lazy(() => import('../Home/Home'));
const Login = lazy(() => import('../Login/Login'));
const Products = lazy(() => import('../Products/Products'));

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
    let WaitingForHeader = this.WaitingComponent(Header);
    return (
      <>
        <Router>
          <WaitingForHeader></WaitingForHeader>
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