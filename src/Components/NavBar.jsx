import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'


      
function NavBar() {
    return (
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#"><strong>¿Cual es tu próximo destino?</strong></a>
        <button class="btn btn-light">
          <FontAwesomeIcon 
            icon={'fas', faMoon}
          />
        </button>
      </nav>
      
    )
}

export default NavBar