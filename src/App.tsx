import React from 'react';
import './App.css';
import {Home} from "./sections/Home";
import {AboutMe} from "./sections/AboutMe";
import {Projects} from "./sections/Projects";

function App() {
  return (
    <div className={"px-24"}>
        <Home />
        <AboutMe />
        <Projects />
    </div>
  );
}

export default App;
