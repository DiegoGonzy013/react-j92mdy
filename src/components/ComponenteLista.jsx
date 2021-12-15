import React from "react";

import './componente-lista.css';

export default function ComponenteLista(props){
  let claseLista = "";
  let prio = "";

  if(props.prioridad){
    prio= 'alta';
  }else if (props.prioridad){
    prio='media';
  }else if (props.prioridad){
    prio='baja';
  }

  if(props.done){
    claseLista='el-checked';
  }else{
    claseLista='el-unchecked';
  }

 return (
  <li className = {claseLista} title={prio}>
    <input type="checkbox" />
    {props.texto}
  </li>
 );
}