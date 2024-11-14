
import React from 'react';
import './App.css';
import RandomNumber from './component/RandomNumber';
import Counter from './component/Counter';

function App() {
  return (
    <div className="App">
      <h1>Random Number & Counter App</h1>
      <RandomNumber />
      <Counter />
    </div>
  );
}

export default App;
