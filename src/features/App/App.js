import React, { Component, lazy, Suspense  } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';
import {setUser} from '../Login/actions';
import Loader from '../../components/Loader/Loader';
import '../../assets/styles/main.css'
import '../../assets/styles/mobile.css'
const Home = lazy(() => import('../Home/Home'));
const Login = lazy(() => import('../Login/Login'));
const Products = lazy(() => import('../Products/Products'));

const App = (props)=> {

  let user = sessionStorage.getItem('user');
  if(user)
    props.setUser(JSON.parse(user));

  const WaitingComponent = (Component)=> {
    return props => (
      <Suspense fallback={<Loader/>}>
        <Component {...props} />
      </Suspense>
    );
  }

  return (
    <>
      <Router>
        <Route path="/" exact component={WaitingComponent(Home)} />
        <Route path="/login/" component={WaitingComponent(Login)} />
        <Route path="/products/" component={Products} />
      </Router>
    </>
  );
  
}

const mapDispatchToProps = dispatch => ({
  setUser: (items)=>dispatch(setUser(items)),
})

export default connect(undefined, mapDispatchToProps)(App);