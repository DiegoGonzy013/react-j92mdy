import React from "react";

import './Headerstyle.css';
import HeaderComponente from './HeaderComponente';

export default function Header(props){

  function setHeader(){

  }
  return (
    <header>
        <nav>
          <HeaderComponente/>
          <ul>
				    <li><a href="#">Inicio</a></li>
				    <li><a href="#">Acerca de</a></li>
				    <li><a href="#">Contacto</a></li>
			    </ul>
        </nav>
    </header>
    );
}