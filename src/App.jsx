import React from "react";
import "./style.css";
import Lista from './components/Lista';


export default function App(){
  const elementos1 = [
    {texto: 'Descomer', prioridad:'alta'}, 
    {texto:'Comer'},
  ];
  const elementos2 = [

  ];
  const elementos3 = [
    {done: true, texto:'Comprar pintura', prioridad:'media'},
  ];
  return (
    <div>
      <h1>Lista de Tareas </h1>;
      <Lista titulo = "Tareas de casa" icono =":(" elementos={elementos1}/>;
      <Lista titulo = "Tareas de clase" icono =":)" elementos={elementos2}/>;
      <Lista titulo = "Pintar la casa" icono =":*" elementos={elementos3}/>;
    </div>
    );
}