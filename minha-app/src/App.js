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
        <img src='https://imgur.com/a/6uQSfra' alt='logo'/>
        <SearchBar className="pesquisa" setSearchTerm={setSearchTerm} />
      </div>
      <div className="WineList">
        <WineList wines={filteredWines} />
      </div>
    </div>
  );
}

export default App;
