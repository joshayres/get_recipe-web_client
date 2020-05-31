import React from 'react';
import Recipie from './components/Recipie';
import Search from './components/Search';
import './App.css';

function App() {
  return (
    <div className="App">
      <Search />
      <Recipie />
    </div>
  );
}

export default App;
