// src/components/Projects.js

import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
import "../styles.css";
import girl2 from "./casual-life-3d-woman-taking-a-funny-photo-with-dog-1 (1).png";
import { MdSchool } from 'react-icons/md';
import { GiBullseye } from 'react-icons/gi';



export default function Projects() {
  return (
    <section  id="about" className="text-white bg-dark body-font mt-12">
      <div className="container px-5 pt-10 mx-auto text-center lg:px-40 pb-0">
        <div className="flex flex-col w-full mb-20">
          <h6 className="text-primary mb-0">A little bit about me!</h6>
          <h1 className="sm:text-4xl text-3xl font-semibold mb-0 text-white">
            Who I Am.
          </h1>
        </div>
       
      </div>
      <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <div className="pink-gradient justify-items-center">
          <img src={girl2} alt="logo" className="z-1 w-3/4 ml-32"/>
          </div>
      </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative flex flex-col items-center ">
          <MdSchool className="text-secondary text-10xl"></MdSchool>
          <p className="text-white px-20 line-height-35 font-medium mb-10 mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <GiBullseye className="text-secondary text-10xl"></GiBullseye>
          <p className="text-white px-20 line-height-35 font-medium mb-10 mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

        </div>
      </div>
    </section>
  );
}