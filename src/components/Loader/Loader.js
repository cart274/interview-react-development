import React, { Component } from "react";
import { connect } from 'react-redux';
import style from "./Loader.module.css";
import loader from "../../assets/images/images/loader.gif"


class Loader extends Component {

  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div className={`${style.loader} ${this.props.show && style.show} `} ref="loader">
        <img src={loader} alt="Loader"/>
        <h4>Cargando...</h4>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  show: state.show
});

const getResultsItems = ()=>{
  console.log('fsdf');
}

const mapDispatchToProps = dispatch => ({
  getItemsMeli: (items)=>dispatch(getResultsItems(items))
})

export default connect(mapStateToProps)(Loader)