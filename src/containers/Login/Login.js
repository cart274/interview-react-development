import React, { Component } from 'react';
import style from './Login.module.css'
import request from '../../utils/request'
import { setUser} from '../../state/actions'
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import WithLoader from '../../components/WithLoader/WithLoader'
import LoginForm from '../../components/LoginForm/LoginForm'


const LoginFormWithLoader = WithLoader(LoginForm)

class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
      loading: false
    }
  }

  async send(data){
    this.setState({loading: true})
    await request('post', 'sign_in', data)
    this.setState({loading: false})
    sessionStorage.setItem('user', JSON.stringify(data));
    await this.props.setUser(data)
    this.props.history.push(`/products`)
  }


  render() {
    return (
      <>
        <Header useScroll={false}></Header>
        <section className={style.login}>
          <h1>Login</h1>
          <LoginFormWithLoader history={this.props.history} isLoading={this.state.loading} send={(data)=> this.send(data)} ></LoginFormWithLoader>
        </section>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setUser: (items)=>dispatch(setUser(items))
})

export default connect(undefined, mapDispatchToProps)(Login);