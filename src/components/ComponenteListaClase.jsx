import React from "react";

import './componente-lista.css';

class ComponenteListaClase extends React.Component{

  constructor(props){
    super(props);
    this.done= props.done;
    this.prioridad= props.prioridad;
    this.texto = props.texto;
  }


setElementClass(){
  this.claseLista =this.prioridad;
  if(this.done){
    this.claseLista +=' el-done';
  }else{
    this.claseLista +=' el-undone';
  }
}

 setTaskStatus(){
  this.done=!this.done;
  setElementClass();
  }
render(){
 return (
  <li className = {claseLista}>
    <input type="checkbox"  /*onChange={setTaskStatus()}*//>
    {this.texto}
  </li>
 );}
}

ComponenteListaClase.defaultProps= {
  prioridad: 'baja',
};

export default ComponenteListaClase;
