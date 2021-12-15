import React from "react";
import "./style.css";
import Lista from './components/Lista';


export default function App(){
  const elementos1 = [
    {prioridad:'alta', done: false, texto: 'Elemento (Comp) 1'}, 
    {prioridad:'baja',done: true, texto:'Elemento (Comp) 2'}
  ];
  const elementos2 = [
    {prioridad: 'alta', done: false, texto:'Elemento (Comp) 3'},
    {prioridad:'baja',done: true, texto:'Elemento (Comp) 4'},
    {prioridad:'media',done: true, texto:'Elemento (Comp) 5'}
  ];
  const elementos3 = [
    {prioridad:'media',done: true, texto:'Elemento (Comp) 6'}
  ];
  return (
    <div>
      <h1>Hola, estamos en diciembre </h1>;
      <Lista titulo = "Componente 1" icono =":(" elementos={elementos1}/>;
      <Lista titulo = "Componente 2" icono =":)" elementos={elementos2}/>;
      <Lista titulo = "Componente 3" icono =":*" elementos={elementos3}/>;
    </div>
    );
}