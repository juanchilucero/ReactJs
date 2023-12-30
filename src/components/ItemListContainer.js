import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      {/* Otro contenido del contenedor */}
    </div>
  );
};

export default ItemListContainer;
