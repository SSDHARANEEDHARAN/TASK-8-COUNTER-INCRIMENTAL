
import React, { useState } from 'react';

const RandomNumber = () => {
  const [number, setNumber] = useState(0);

  const generateRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setNumber(randomNum);
  };

  return (
    <div>
      <h2>Random Number Generator</h2>
      <p>Generated Number: {number}</p>
      <button onClick={generateRandomNumber}>Generate Random Number</button>
    </div>
  );
};

export default RandomNumber;
