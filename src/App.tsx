import React from 'react';
import Header from "./Components/Header";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
import resume from "./Components/resume";
import './App.css';
import "./css/default.css";
import "./css/layout.css";
import "./css/media-queries.css";
import Footer from "./Components/Footer";


function App() {
  return (
      <div className={"App"}>
          <Header resumeData={resume}/>
          <About resumeData = {resume}/>
          <Skills resumeData={resume}/>
          <Contact resumeData = {resume}/>
          <Footer resumeData = {resume}/>
      </div>

  );
}

export default App;
