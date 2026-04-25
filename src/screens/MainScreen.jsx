import React from "react";
import Screen1 from "./Screen1";
import Work from "./Work";
import Skills from "./Skills";
import Contact from "./Contact";
import Projects from "./Projects";
import Resume from "./Resume";

const MainScreen = () => {
  return (
    <>
      <section className="min-h-screen">
        <div id="home">
          <Screen1 />
        </div>
        <div id="work">
          <Work />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="resume">
          <Resume />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </section>
    </>
  );
};

export default MainScreen;
