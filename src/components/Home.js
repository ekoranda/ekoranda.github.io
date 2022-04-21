import React from "react";
import Navbar from "./Navbar.js";
import Contact from "./Contact.js";
import Main from "../Main.js";


import "../styles.css";

export default function Home() {

    return (
<main className="text-white bg-dark body-font">
       <Navbar />
        <Main />
       <Contact />
    </main>

    )

}