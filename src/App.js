import React from "react";
import "./style.css";
import Lista from './components/Lista';


export default function App(){
  return (
    <div>
      <h1>Hola, estamos en diciembre </h1>;
      <Lista titulo = "Componente 1" icono =":("/>;
      <Lista titulo = "Componente 2" icono =":)"/>;
      <Lista titulo = "Componente 3" icono =":*"/>;
    </div>
    );
}