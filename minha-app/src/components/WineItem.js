// src/components/WineItem.js
import React from 'react';

function WineItem({ wine }) {
  return (
    <div>
      <h2>{wine.name}</h2>
      <p>Preço: ${wine.price}</p>
      <p>Estoque: {wine.stock}</p>
      <button disabled={wine.stock === 0}>Adicionar ao Carrinho</button>
    </div>
  );
}

export default WineItem;