import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faGlobe } from '@fortawesome/free-solid-svg-icons'
import {useHistory} from 'react-router-dom';
import './Home.css';



      
function NavBar() {

  const history = useHistory();
    return (
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" style={{cursor: 'pointer'}} onClick={() => {history.push('/')}}><strong>¿Cual es tu próximo destino? <FontAwesomeIcon icon={'fas', faGlobe} /></strong></a>
      </nav>
      
    )
}

export default NavBar