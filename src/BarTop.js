

import React, { useState } from 'react';

const Header = () => {
    return (
      <div className="header">
        <h1>Mi Aplicación</h1>
        {/* Agrega aquí tus elementos de navegación, como enlaces a otras páginas */}
        <nav>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/acerca">Acerca de</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </nav>
      </div>
    );
  };