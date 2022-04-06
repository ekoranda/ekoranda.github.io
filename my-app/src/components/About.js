import React from "react";
import "../styles.css";
import girl1 from "./casual-life-3d-female-metis-t-shirt-pose-notebook-4 (1).png";

import { BsGithub, BsLinkedin, BsArrowRight } from 'react-icons/bs';
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="emily">
      <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p className="text-danger mb-2 hover:animate-bounce">UI/UX Design</p>
          <h1 className="sm:text-4xl text-6xl mb-4 font-medium text-bleachWhite">
          I'm <span className="animate-charcter">Emily</span>,
            <br className="hidden lg:inline-block" /><span className="underline-primary">Front-End</span>
            <br className="hidden lg:inline-block" />Software Engineer
          </h1>
          <p className="mb-6 mt-6 text-secondary line-height-35 pr-20">
          I’m a Front-End Software Engineer located in  Madison, Wisconsin pursing a Bachelor's of Science in Computer Science. I have a passion for web design and building creating and intuitive, dynamic user experiences.
          </p>
          <div className="flex justify-center mb-5 ml-12 mt-5">
            <ul>
              <li>
                <a href="https://github.com/ekoranda" className="relative" target="_blank" rel="noopener noreferrer">
                <i><BsGithub className="text-2xl"/></i>
                </a>
              </li>
              <li>
              <a href="https://www.linkedin.com/in/emily-koranda-6658ab181/" target="_blank" rel="noopener noreferrer">
              <i><BsLinkedin className="text-2xl"></BsLinkedin></i>
              </a>
              </li>
            </ul>
          </div>
        
          <div className="flex justify-center">
            <a
              href="#"
              className="inline-flex text-bleachWhite gradient-button border-0 py-2 px-6 rounded-full text-lg rainbow sink hover:font-bold">
              Download CV
              <BsArrowRight className="text-2xl font-black ml-6 mt-1 hover:font-semibold"></BsArrowRight>
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative">
          <div className="pink-gradient z--1">
          <img src={girl1} alt="logo" className="z-1"/>
          </div>
        </div>
      </div>
    </section>
  );
}