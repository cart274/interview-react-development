import React, { Component } from "react";
import style from "./Button.module.css";


const Button = (props)=> {

  return (
    <button className={`${style.button} ${style[props.btnType]}`}>
      {props.text}
    </button>
  );
  
}

export default Button;
