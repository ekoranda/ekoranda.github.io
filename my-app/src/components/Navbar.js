// src/components/Navbar.js

import { ArrowRightIcon } from "@heroicons/react/solid";

import { PhoneIcon} from "@heroicons/react/solid"; 

import React from "react";
import "../styles.css";


export default function Navbar() {
  return (
    <header className="bg-dark md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#emily" className="ml-3 text-xl">
            Emily
          </a>
        </a>
        <nav className="md:mr-auto md:ml-auto md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center">
          
          <a href="#about" className="mr-12 hover:text-white text-secondary">
            About
          </a>
          <a href="#skills" className="mr-12 hover:text-white text-secondary">
            Skills
          </a>
          <a href="#portfolio" className="mr-12 hover:text-white text-secondary">
            Portfolio
          </a>
          <a href="#facts" className="mr-12 hover:text-white text-secondary">
            Fun Facts!
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center rounded-full text-base mt-4 md:mt-0 text-white hover:text-white border-primary border-2 py-2 px-4">
          <PhoneIcon className="w-4 h-4 mr-2 " />
          Let's Talk
          
        </a>
      </div>
    </header>
  );
}