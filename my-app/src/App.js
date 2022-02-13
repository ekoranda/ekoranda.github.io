import React from "react";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Navbar from "./components/Navbar.js";
import Projects from "./components/Projects.js";
import Skills from "./components/Skills.js";
import Testimonials from "./components/Testimonials.js";


export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
       <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    
    </main>
  );
}
