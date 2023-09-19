import React from 'react';
import './App.css';
import {Home} from "./sections/Home";
import {AboutMe} from "./sections/AboutMe";

function App() {
  return (
    <div className={"px-24"}>
        <Home />
        <AboutMe />
      <div className={"bg-blue-500 h-screen"}>
        last test
      </div>
    </div>
  );
}

export default App;
