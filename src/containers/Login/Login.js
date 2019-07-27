import React, { Component } from 'react';
import Button from '../../components/Button/Button';
import style from './Login.module.css'
import request from '../../utils/request'
import {setLoader, setUser} from '../../state/actions'
import { connect } from 'react-redux';

class Login extends Component {

  constructor(props){
    super(props);

    this.state = {
      name: '',
      lastname: '',
      email: '',
      age: '',
      ageList: [],
      terms: false,
      isValid: false
    }
  }

  componentDidMount(){
    let ageList = [{text: 'Seleccione', value: 0}];

    for(let year= 18; year<= 100; year++){
      ageList.push({text: year, value: year})
    }
    this.setState({ageList});
  }

  changeName(e){
    let { value = ''} = e.target;
    this.setState({name: value}, () => {
      this.validate();
    })    
  } 

  changeLastname(e){
    let { value = '' } = e.target;
    this.setState({lastname: value}, () => {
      this.validate();
    })  
  } 

  changeEmail(e){
    let { value = '' } = e.target;
    this.setState({email: value}, () => {
      this.validate();
    })  
  } 

  changeAge(e){
    let { value } = e.target;
    this.setState({age: value}, () => {
      this.validate();
    })  
  } 
  
  changeTerms(e){
    let { value } = e.target;
    this.setState({terms: value}, () => {
      this.validate();
    })  
  } 

  validate(e){
    let {name, lastname, email, age, isValid, terms} = this.state,
    validated = false;

    if(name && name.trim() && lastname && lastname.trim() && email && age && terms && this.validateEmail(email) ){
      if(email)
        validated = true;
    }

    if(isValid !== validated)
      this.setState({isValid: validated});
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  async send(e){
    e.preventDefault();
    this.props.setLoader(true);
    let {name, lastname, email, age} = this.state,
    data = {name, lastname, email, age};
    await request('post', 'sign_in', data)
    sessionStorage.setItem('user', JSON.stringify(data));
    this.props.setLoader(false);
    this.props.setUser(data)
    this.props.history.push(`/products`)
  }

  render() {
    let {name, lastname, email, age, ageList, terms, isValid} = this.state;

    return (
      <section className={style.login}>
        <h1>Login</h1>
        <form>
          <div className={style.leftLogin}>
            <label for="name">Nombre</label>
            <input type="text" placeholder="Nombre" id="name" value={name} onChange={(e)=> this.changeName(e)}/>
            <label for="email">Email</label>
            <input type="mail" placeholder="Email" id="email" value={email} onChange={(e)=> this.changeEmail(e)}/>
          </div>
          <div className={style.rightLogin}>
            <label for="lastname">Apellido</label>
            <input type="text"  placeholder="Apellido" id="lastname" value={lastname} onChange={(e)=> this.changeLastname(e)}/>
            <label for="age">Edad</label>
            <select id="age" onChange={(e)=> this.changeAge(e)} value={age}>
              {
                Array.isArray(ageList) && ageList.map( ({value = 0, text = ''}, key) =>{
                  return <option key={ key } value={value} >{text}</option>
                })
              }
            </select>
          </div>
          <div className={style.termsLogin}>
            <input type="checkbox" id="terms" defaultChecked={terms} onChange={(e) =>this.changeTerms(e)}></input> 
            <label for="terms">Acepto los términos y condiciones</label>
          </div>
          <div className={style.btnGroup}>
            <Button text="Cancelar" btnType="tertiary" onClick={(e)=> this.props.history.push(`/`)}></Button>
            <Button text="Entrar" btnType="primary" disabled={!isValid} onClick={(e)=> this.send(e)}></Button>
          </div>
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setLoader: (items)=>dispatch(setLoader(items)),
  setUser: (items)=>dispatch(setUser(items)),
})

export default connect(undefined, mapDispatchToProps)(Login);