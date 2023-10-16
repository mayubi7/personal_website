import React from 'react';
import './App.css';
import {Home} from "./sections/Home";
import {AboutMe} from "./sections/AboutMe";
import {Projects} from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
      <div>
          <NavigationBar />
          <div className={"px-24"}>
            <Home />
            <AboutMe />
            <Projects />
            <Experience />
            <Contact />
          </div>
      </div>
  );
}

export default App;
