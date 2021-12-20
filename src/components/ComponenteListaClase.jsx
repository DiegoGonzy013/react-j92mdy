import React from 'react';

import './componente-lista.css';

class ComponenteListaClase extends React.Component {
  constructor(props) {
    super(props);
    this.state={};
    this.done = props.done;
    this.prioridad = props.prioridad;
    this.texto = props.texto;
    this.setElementClass();
  }

  setElementClass() {
    this.claseLista = this.prioridad;
    if (this.done) {
      this.claseLista += ' el-done';
    } else {
      this.claseLista += ' el-undone';
    }
  }

  setTaskStatus() {
    this.done = !this.done;
    setElementClass();
  }
 changeStatus(){
   this.setState({done:!this.state.done});
 }

  render() {
    return (
      <li className={this.claseLista}>
        <input type="checkbox" defaultCheked={this.state.done} onChange={this.chageStatus.bind(this)} />
        {this.texto}
      </li>
    );
  }
}
export default ComponenteListaClase;
ComponenteListaClase.defaultProps = {
  prioridad: 'baja',
};

export default ComponenteListaClase;