import React from "react";
import "./style.css";
import ListaClase from './components/ListaClase';


export default function App(){
  const elementos1 = [
    {texto: 'Desayunar', prioridad:'alta'}, 
    {texto:'Comer'},
    {texto:'Limpiar', prioridad:'media'},
  ];
  const elementos2 = [

  ];
  const elementos3 = [
    {done: true, texto:'Pintura', prioridad:'media'},
    {texto:'Fruta'},
    {texto:'Pan', prioridad:'alta'},
  ];
  return (
    <div>
      <h1>Lista de Tareas </h1>
      <ListaClase titulo = "Tareas de la casa" icono ="🏡" elementos={elementos1}/>
      <ListaClase titulo = "Tareas de clase" icono ="📚" elementos={elementos2}/>
      <ListaClase titulo = "Lista de la compra" icono ="🛒" elementos={elementos3}/>
    </div>
    );
}