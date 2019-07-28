import React, { useState }  from 'react'
import { useTranslation } from "react-i18next";
import style from './LoginForm.module.css'
import Button from '../../components/Button/Button';

const LoginForm = (props)=>{
    const {t}= useTranslation();
    let ageList = [{text: t('Seleccione'), value: 0}];

    for(let year= 18; year<= 100; year++){
        ageList.push({text: year, value: year})
    }

    const [isValid, setValid] = useState(false);
  
    const [data, setData] = useState({
        name: '',
        lastname: '',
        email: '',
        age: '',
        terms: false,
    });

    const inputChange = async (e)=>{
        setData({
            ...data,
            [e.target.name]: e.target.value
          })
        validate({
            ...data,
            [e.target.name]: e.target.value
          });
    } 

    const validate = ({name, lastname, email, age, terms})=>{
        let validated = false;
        if(name && name.trim() && lastname && lastname.trim() && email && age && terms && validateEmail(email) ){
          if(email)
            validated = true;
        }
        if(isValid !== validated)
          setValid(true);
    }
    
    const validateEmail = (email)=>{
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    return(
        <form className={style.loginForm}>
            <div className={style.leftLogin}>
                <label for="name">{t('Nombre')}</label>
                <input type="text" placeholder={t('Nombre')} id="name" value={data.name} name="name" onChange={ inputChange}/>
                <label for="email">{t('Correo')}</label>
                <input type="mail" placeholder={t('Nombre')} id="email" value={data.email} name="email" onChange={(e)=> inputChange(e)}/>
            </div>
            <div className={style.rightLogin}>
                <label for="lastname">{t('Apellido')}</label>
                <input type="text"  placeholder="Apellido" id="lastname" value={data.lastname} name="lastname" onChange={(e)=> inputChange(e)}/>
                <label for="age">{t('Edad')}</label>
                <select id="age" onChange={(e)=> inputChange(e)} name="age" value={data.age}>
                {
                    Array.isArray(ageList) && ageList.map( ({value = 0, text = ''}, key) =>{
                    return <option key={ key } value={value} >{text}</option>
                    })
                }
                </select>
            </div>
            <div className={style.termsLogin}>
                <input type="checkbox" id="terms" defaultChecked={data.terms} name="terms" onChange={(e) => inputChange(e)}/> 
                <label for="terms">{t('Acepto los términos y condiciones')}</label>
            </div>
            <div className={style.btnGroup}>
                <Button text={t('Cancelar')} btnType="tertiary" onClick={(e)=> props.history.push(`/`)}></Button>
                <Button text={t('Aceptar')} btnType="primary" disabled={!isValid} onClick={(e)=> props.send(data)}></Button>
            </div>
        </form>
    )

}
export default LoginForm;