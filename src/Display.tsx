import React, { useContext, useEffect } from 'react';
import { NameContext, WindowWidthContext } from './App';

function Display() {
  const windowWidth = useContext(WindowWidthContext);
  const { name } = useContext(NameContext);

  useEffect(() => {
    console.log(`The name is ${name}`);
  }, [name]);
  

  return (
    <div>
      <p>The width of the window is {windowWidth}.</p>
      <p>Hello {name}!</p>
    </div>
  );
}

export default Display;