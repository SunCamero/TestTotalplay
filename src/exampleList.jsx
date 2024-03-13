import React, { useState } from 'react';

const ListaDeElementos = () => {
  const [elementoClickeado, setElementoClickeado] = useState(null);

  const arregloDeElementos = ['Elemento 1', 'Elemento 2', 'Elemento 3'];

  const manejarClic = (elemento) => {
    setElementoClickeado(elemento);
  };

  return (
    <div>
      <ul>
        {arregloDeElementos.map((elemento, index) => (
          <li key={index} onClick={() => manejarClic(elemento)}>
            {elemento}
          </li>
        ))}
      </ul>

      {elementoClickeado && (
        <p>lickeado: {elementoClickeado}</p>
      )}
    </div>
  );
};

export default ListaDeElementos;