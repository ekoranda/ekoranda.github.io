import React from "react";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Navbar from "./components/Navbar.js";
import Projects from "./components/Projects.js";
import Skills from "./components/Skills.js";
import Testimonials from "./components/Testimonials.js";
import Facts from "./components/Facts.js";
import "./styles.css";



export default function App() {
  return (
    <main className="text-white bg-dark body-font">
       <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Facts />
      <Contact />
    
    </main>
  );
}
