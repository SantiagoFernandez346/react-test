import React from 'react'

function navBar() {
    return 
        <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="index.html">Inicio</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Componentes
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a className="dropdown-item" href="mother.html">Motherboards</a></li>
                      <li><a className="dropdown-item" href="Proscesadores.html">Proscesadores</a></li>
                      <li><a className="dropdown-item" href="Placas-de-video.html">Placas de video</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="form.html">Contactanos</a>
                  </li>
                </ul>
               <a className="nav-link active" aria-current="page" href="carrito.html">Carrito</a> 
          </nav>
    
}

export default navBar
