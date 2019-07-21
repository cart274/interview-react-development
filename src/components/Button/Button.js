import React, { Component } from "react";
import style from "./Button.module.css";


const Button = (props)=> {

  return (
    <button 
      type="button" 
      className={`${style.button} ${props.disabled ? style.disabled : style[props.btnType] }`}
      onClick={ props.onClick }>
      {props.text}
    </button>
  );
  
}

export default Button;
