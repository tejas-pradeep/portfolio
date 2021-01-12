import React from 'react';
import ActiveMenuLink from "active-menu-link";
import Header from "./Components/Header";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
import Timeline from "./Components/Timeline";
import Work from "./Components/Work";
import Footer from "./Components/Footer";
import resume from "./Components/resume";
import './App.css';
import "./css/default.css";
import "./css/layout.css";
import "./css/media-queries.css";



function App() {
    React.useEffect(() => {
        new ActiveMenuLink("#nav-wrap", {activeClass : "current", ease:"inQuad"});
    }, []);
  return (
      <div className={"App"}>
          <Header resumeData={resume}/>
          <About resumeData = {resume}/>
          <Skills resumeData={resume}/>
          <Work resumeData={resume}/>
          <Timeline resumeData={resume}/>
          <Contact/>
          <Footer resumeData = {resume}/>
      </div>

  );
}

export default App;
