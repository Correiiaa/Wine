// src/components/WineList.js
import React from 'react';
import WineItem from './WineItem';

function WineList({ wines }) {
  return (
    <div>
      {wines.map(wine => (
        <WineItem key={wine.id} wine={wine} />
      ))}
    </div>
  );
}

export default WineList;