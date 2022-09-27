import React, { useContext } from 'react';
import { NameContext } from './App';

function Input() {
  const { setName } = useContext(NameContext);

  return (
    <div>
      <p>What is you name?</p>
      <input type="text" onChange={(e) => setName(e.target.value)} />
    </div>
  );
}

export default Input;