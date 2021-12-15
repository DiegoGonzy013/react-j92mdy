import React from "react";
import ComponenteLista from './ComponenteLista';

export default function Lista(props) {
  const listaComponentes = [];

  if (props.elementos !== undefined) {
  for (let i = 0; i < props.elementos.length; i++) {
    listaComponentes.push(<ComponenteLista 
      prioridad={props.elementos[i].prioridad}
      done={props.elementos[i].done}
      texto={props.elementos[i].texto} 
      />);
    }
  }
  return (
  <div>
  {props.titulo} - {props.icono}
    <ul>
      {listaComponentes}
    </ul>
  </div>);
}