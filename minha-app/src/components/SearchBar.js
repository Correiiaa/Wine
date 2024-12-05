// src/components/SearchBar.js
import React from 'react';

function SearchBar({ setSearchTerm }) {
  return (
    <input 
      type="text" 
      className="search-input"
      placeholder="Pesquise por vinhos..." 
      onChange={(e) => setSearchTerm(e.target.value)} 
    />
  );
}

export default SearchBar;