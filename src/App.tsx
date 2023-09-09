import React from 'react';
import './App.css';
import {Home} from "./sections/Home";
import {AboutMe} from "./sections/AboutMe";

function App() {
  return (
    <div className={"lg:px-52 md:px-10"}>
        <Home />
        <AboutMe />
      <div className={"bg-blue-500 h-screen"}>
        last test
      </div>
    </div>
  );
}

export default App;
