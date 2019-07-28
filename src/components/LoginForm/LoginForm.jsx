import React, { Component }  from 'react'
import style from './LoginForm.module.css'
import Button from '../../components/Button/Button';

const LoginForm = (props)=>{

    let ageList = [{text: 'Seleccione', value: 0}];

    for(let year= 18; year<= 100; year++){
        ageList.push({text: year, value: year})
    }

  /*  constructor(){
        super(props);
    
        this.state = {
            ageList: [],
            isValid: false,
            data:{
                name: '',
                lastname: '',
                email: '',
                age: '',
                terms: false,
            }
        }
    }*/




    const inputChange = (e)=>{
        let {data} = this.state;
        let { value = '', name = ''} = e.target;
        data[name] = value;
        this.setState({data}, () => {
            this.validate();
        })    
    } 

    const validate = (e)=>{
        let {data} = this.state;
        let {name, lastname, email, age, isValid, terms} = data,
        validated = false;
        if(name && name.trim() && lastname && lastname.trim() && email && age && terms && this.validateEmail(email) ){
          if(email)
            validated = true;
        }
    
        if(isValid !== validated)
          this.setState({isValid: validated});
    }
    
    const validateEmail = (email)=>{
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    let {data, ageList, isValid} = this.state;
    let {name, lastname, email, age, terms} = data;
    return(
        <form className={style.loginForm}>
            <div className={style.leftLogin}>
                <label for="name">Nombre</label>
                <input type="text" placeholder="Nombre" id="name" value={name} name="name" onChange={(e)=> inputChange(e)}/>
                <label for="email">Email</label>
                <input type="mail" placeholder="Email" id="email" value={email} name="email" onChange={(e)=> inputChange(e)}/>
            </div>
            <div className={style.rightLogin}>
                <label for="lastname">Apellido</label>
                <input type="text"  placeholder="Apellido" id="lastname" value={lastname} name="lastname" onChange={(e)=> inputChange(e)}/>
                <label for="age">Edad</label>
                <select id="age" onChange={(e)=> inputChange(e)} name="age" value={age}>
                {
                    Array.isArray(ageList) && ageList.map( ({value = 0, text = ''}, key) =>{
                    return <option key={ key } value={value} >{text}</option>
                    })
                }
                </select>
            </div>
            <div className={style.termsLogin}>
                <input type="checkbox" id="terms" defaultChecked={terms} name="terms" onChange={(e) => inputChange(e)}/> 
                <label for="terms">Acepto los términos y condiciones</label>
            </div>
            <div className={style.btnGroup}>
                <Button text="Cancelar" btnType="tertiary" onClick={(e)=> props.history.push(`/`)}></Button>
                <Button text="Entrar" btnType="primary" disabled={!isValid} onClick={(e)=> props.send(data)}></Button>
            </div>
        </form>
    )

}
export default LoginForm;