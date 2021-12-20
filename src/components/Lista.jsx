import React from "react";
import ComponenteListaClase from './ComponenteListaClase';

export default function Lista(props) {
  const listaInicial = [];

  if (props.elementos !== undefined) {
  for (let i = 0; i < props.elementos.length; i++) {
    listaInicial.push(<ComponenteListaClase 
      done={props.elementos[i].done}
      texto={props.elementos[i].texto}
      prioridad={props.elementos[i].prioridad} 
      />);
    }
  }
  const [listaComponentes, setListaComponentes] = useState(listaInicial);

  const funcion= function addElement(){
    const newLista = listaComponentes.concat(
      <ComponenteListaClase done={false} texto ="Nueva tarea"/>
    );
    setListaComponentes(newLista);
  }
  return (
  <div>
  {props.titulo} - {props.icono}
    <ul>
      {listaComponentes}
      <li>
        <input type="Texto" placeholder="Introduce texto"/>
        <br/>
      <button>Añadir</button>
      </li>
    </ul>
  </div>);
}