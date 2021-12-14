import React from "react";
import ComponenteLista from './ComponenteLista';

export default function Lista(props) {
  return (
  <div>
  {props.titulo} - {props.icono}
    <ul>
      <ComponenteLista texto="Elemento 1"/>
      <ComponenteLista texto="Elemento 2"/>
      <li>Elemento 3</li>

    </ul>
  </div>);
}