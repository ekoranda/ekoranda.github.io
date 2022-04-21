import React, {useEffect, useState} from "react";
import "../styles.css";
import girl2 from "./img/casual-life-3d-woman-taking-a-funny-photo-with-dog-1 (1).png";
import { MdSchool } from 'react-icons/md';
import { GiBullseye } from 'react-icons/gi';
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const squareVariants = {
  hidden: {opacity: 0},
    visible:{
      opacity: 1,
      y: ['5px', '0px'],
      transition: {
        delay: 0.2,
        duration: 1.5,
      }
    },
};


const sideVar = {
  hidden: {opacity: 0},
    visible:{
      opacity: 1,
      x: ['200px', '0px'],
      transition: {
        delay: 1,
        duration: 1.5,
      }
    },
};

const girlVar = {
  hidden: {opacity: 0},
    visible:{
      opacity: 1,
      transition: {
        delay: 0,
        duration: 2,
      }
    },
};

function Side() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [loaded, setLoaded]= useState(false);
  useEffect(() => {
    if (inView & !loaded) {
      setLoaded(true);
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={sideVar}
    >
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative flex flex-col items-center ">
     <MdSchool className="text-secondary text-10xl"></MdSchool>
          <p className="text-white px-20 line-height-35 font-medium mb-10 mt-2">
            I'm a current senior at UW-Madison pursuing a Bachelor's of Science in Computer Science and a certificate in Digital Studies.
          </p>
          <GiBullseye className="text-secondary text-10xl"></GiBullseye>
          <p className="text-white px-20 line-height-35 font-medium mb-10 mt-2"> I want to combine my formal computer science education with my passion for digital design and creativity to create innovative and imaginative user experiences.</p>
      </div>
    </motion.div>
  );
}

function Title() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [loaded, setLoaded]= useState(false);
  useEffect(() => {
    if (inView & !loaded) {
      setLoaded(true);
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
    >

      
      <h6 className="text-primary mb-0">A little bit about me!</h6>
          <h1 className="sm:text-4xl text-3xl font-semibold mb-0 text-white">
            Who I Am.
          </h1>
    </motion.div>
  );
}


function Girl() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={girlVar}
    >

      
    <img src={girl2} alt="logo" className="z-1 w-3/4 ml-32"/>
    </motion.div>
  );
}


export default function About() {
  return (
    <section  id="about" className="text-white bg-dark body-font mt-5">
      <div className="container px-5 pt-10 mx-auto text-center lg:px-40 pb-0">
        <div className="flex flex-col w-full mb-10">
 
          <Title />
        </div>
       
      </div>
      <div className="container mx-auto flex px-10  md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div className="pink-gradient justify-items-center">
            <Girl />
         
          </div>
      </div>
        
          <Side />
         

       
      </div>
    </section>
  );
}