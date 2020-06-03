import React from 'react';
import Recipie from './components/Recipie';
import Search from './components/Search';
import Next from './components/Next';
import './App.css';

function App() {
  return (
    <div className="App">
      <Search />
      <Recipie />
      <Next />
    </div>
  );
}

export default App;
