import React, { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react';
import './App.css';
import Display from './Display';
import Input from './Input';

interface NameContextInterface {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
}

const NameContext = createContext<NameContextInterface>({} as NameContextInterface);
const WindowWidthContext = createContext<number>(0);

function App() {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [name, setName] = useState<string>("");

  useEffect(() => {
    console.log("component mounted");
    window.addEventListener("resize",updateWindowWidth);
    
  }, []);
  
  useEffect(() => {
    console.log("re-rendered");
    // return () => {
    //   console.log("unmounted");
    // }
  });

  useEffect(() => {
    console.log(`Name updated: ${name}`);
    
  
    return () => {
      console.log("re-mounted");
      
    }
  }, [name])
  
  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <h1
          style={{color: "lightblue"}}
        >
          Demo Component
        </h1>
        <NameContext.Provider value={{name, setName}}>
          <WindowWidthContext.Provider value={windowWidth}>
            <Display />
            <Input />
          </WindowWidthContext.Provider>
        </NameContext.Provider>
      </header>
    </div>
  );
}

export { NameContext, WindowWidthContext };
export default App;
