import React from "react";
import "../styles.css";
import girl1 from "./img/casual-life-3d-female-metis-t-shirt-pose-notebook-4 (1).png";

import { BsGithub, BsLinkedin, BsArrowRight } from 'react-icons/bs';
import { motion, AnimatePresence } from "framer-motion";
import TypeWriter from 'react-typewriter';



export default function Emily() {
  const line1 = "I'm Emily Koranda"
  const line2 = "Front-end"
  const line3 = "Engineer"

  const container = {
    hidden: { opacity: 0 },
    show: {
      
      opacity: 1,
      transition: {
        y: ['100px', '0px'],
        delay: 1.75,
      }
    },
    active: {
      y: ['100px', '0px'],
      duration: 0.5,
      delay: 2.3,
    }
  }

  const variants = {
    hidden: {opacity: 0},
    visible:{
      opacity: 1,
      y: ['-10px', '0px'],
      transition: {
        delay: 2,
      }
    },
  }

  const paragraph = {
    hidden: {opacity: 0},
    visible:{
      opacity: 1,
      y: ['5px', '0px'],
      transition: {
        delay: 2.2,
      }
    },
  }

  const links = {
    hidden: {opacity: 0},
    visible:{
      opacity: 1,
      y: ['5px', '0px'],
      transition: {
        delay: 2.4,
      }
    },
  }

  const girl = {
    hidden: {opacity: 0},
    visible:{
      opacity: 1,
      x: ['300px', '0px'],
      transition: {
        delay: 1,
      }
    },
  }

  return (
    <section id="emily">
      <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 ">
        <motion.div
            initial="hidden"
            animate="visible"            
            variants={variants}
        >
        <p className="text-danger mb-2 hover:animate-bounce">UI/UX Design</p>
        </motion.div>
        <TypeWriter typing={1} initDelay={0} maxDelay={100} className="typedHeader">
        <h1 className="sm:text-4xl text-6xl mb-4 font-medium text-bleachWhite">
          I'm <span className="animate-charcter">Emily</span>,
            <br className="hidden lg:inline-block" /><span className="underline-primary">Front-End</span>
            <br className="hidden lg:inline-block" />Software Engineer
          </h1>
        </TypeWriter> 
        <motion.div
          initial="hidden"
          animate="visible"
          variants={paragraph}
        >
          <p className="mb-0 mt-6 text-secondary line-height-35 pr-20">
          I’m a Front-End Software Engineer located in  Madison, Wisconsin pursuing a Bachelor's of Science in Computer Science. I have a passion for web design and building creative and intuitive, dynamic user experiences.
          </p>
          </motion.div>  
          <motion.div
            initial="hidden"
            animate="visible"            
            variants={links}
        > 
          <div className="flex justify-center mb-4 ml-12 mt-5">
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
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"            
            variants={links}
        > 
          <div className="flex justify-center">
            <a
            href={require("./img/Emily Koranda Resume.pdf")} download="EmilyKorandaResume"
              className="inline-flex text-bleachWhite gradient-button border-0 py-2 px-6 rounded-full text-lg rainbow sink hover:font-bold">
              Download Resume
              <BsArrowRight className="text-2xl font-black ml-6 mt-1 hover:font-semibold"></BsArrowRight>
            </a>
          </div>
          </motion.div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative">
          <div className="pink-gradient z--1">
          <motion.div
            initial="hidden"
            animate="visible"            
            variants={girl}
        > 
          <img src={girl1} alt="logo" className="z-1"/>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}