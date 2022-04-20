import React from "react";
import Navbar from "./components/Navbar.js";
import Contact from "./components/Contact.js";
import Main from "./Main.js";


import "./styles.css";



export default function App() {
  return (
    <main className="text-white bg-dark body-font">
       <Navbar />
       <Main />
       <Contact />
    </main>
  );
}
