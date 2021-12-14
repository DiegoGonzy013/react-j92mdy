import React from "react";
import "./style.css";
import ComponenteEj from './components/ComponenteEj';

export default function App(){
  return (
    <div>
      <h1>Hola (desde componente)</h1>;
      <ComponenteEj icono=" :)"/>;
      <ComponenteEj icono=" :("/>;
      <ComponenteEj icono=" ;("/>;
      <ComponenteEj icono=" ;*"/>;
    </div>
    );
}