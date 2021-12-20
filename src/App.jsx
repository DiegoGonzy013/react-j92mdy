import React from "react";
import "./style.css";
import Lista from './components/Lista';


export default function App(){
  const elementos1 = [
    {done: false, texto: 'Descomer', prioridad:'alta'}, 
    {done: true, texto:'Comer'},
  ];
  const elementos2 = [
    {done: false, texto:'Aprender a programar'},
    {texto:'Desprogramar kappa'},
    {texto:'Programacion', prioridad:'media'},
  ];
  const elementos3 = [
    {done: true, texto:'Comprar pintura', prioridad:'media'},
  ];
  return (
    <div>
      <h1>Hola, estamos en diciembre </h1>;
      <Lista titulo = "Tareas de casa" icono =":(" elementos={elementos1}/>;
      <Lista titulo = "Tareas de clase" icono =":)" elementos={elementos2}/>;
      <Lista titulo = "Pintar la casa" icono =":*" elementos={elementos3}/>;
    </div>
    );
}