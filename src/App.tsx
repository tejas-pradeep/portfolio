import React from 'react';
import Header from "./Components/Header";
import About from "./Components/About";
import Contact from "./Components/Contact";
import resume from "./Components/resume";
import './App.css';


function App() {
  return (
      <div className={"App"}>
          <Header resumeData={resume}/>
          <About resumeData = {resume}/>
          <Contact resumeData = {resume}/>
      </div>

  );
}

export default App;
