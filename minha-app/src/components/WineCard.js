// src/components/WineCard.js
import React from 'react';

function WineCard({ wine }) {
  return (
    <div className="wine-card">
      <h2>{wine.name}</h2>
      <img src={wine.image} alt={wine.name} />        
      <p>Preço: €{wine.price}</p>
      <p>Estoque: {wine.stock}</p>    
      <button disabled={wine.stock === 0}>Adicionar ao Carrinho</button>
    </div>
  );
}

export default WineCard;