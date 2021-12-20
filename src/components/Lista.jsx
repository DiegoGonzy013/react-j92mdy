import React from "react";
import ComponenteListaClase from './ComponenteListaClase';

export default function Lista(props) {
  const listaComponentes = [];

  if (props.elementos !== undefined) {
  for (let i = 0; i < props.elementos.length; i++) {
    listaComponentes.push(<ComponenteListaClase 
      done={props.elementos[i].done}
      texto={props.elementos[i].texto}
      prioridad={props.elementos[i].prioridad} 
      />);
    }
  }
  return (
  <div>
  {props.titulo} - {props.icono}
    <ul>
      {listaComponentes}
      <li>
        <input text="Texto" placeholder="Introduce texto"/>
        <br/>
      <button>Añadir</button>
      </li>
    </ul>
  </div>);
}