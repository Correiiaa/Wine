// src/App.js
import React, { useState } from 'react';
import './App.css';
import WineList from './components/WineList';
import SearchBar from './components/SearchBar';
import wines from './data/wines';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredWines = wines.filter(wine => 
    wine.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="Wines">
      <div className='header'>
      <h1>Loja de Vinhos</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      </div>
      <div className="WineList">
      <WineList wines={filteredWines} />
      </div>
    </div>
  );
}

export default App;
