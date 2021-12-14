import React from'react';

import ComponenteEj from './components/ComponenteEj';

export function App(){
  return (
    <div>
    <h1>Hola (desde componente)</h1>;
    <ComponentEj icono=":)"/>;
    <ComponentEj icono=":("/>;
    <ComponentEj icono=";("/>;
    <ComponentEj icono=";*"/>;
    </div>
    );
}