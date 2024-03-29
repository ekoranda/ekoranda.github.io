
import React, {useEffect, useState} from "react";
import "../styles.css";
import stationary from "./img/casual-life-3d-stationery.png";
import { AiFillHtml5 }  from 'react-icons/ai';
import { IoLogoCss3 } from 'react-icons/io';
import { SiJavascript, SiReact, SiTailwindcss, SiAndroid, SiCanva} from 'react-icons/si';
import { CgFigma } from 'react-icons/cg';
import girl3 from "./img/casual-life-3d-girl-stretches-with-a-laptop-on-her-feet (1).png";
import artSupplies from "./img/artSupplies.png";
import phone from "./img/phone.png"
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const titleVar = {
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

const engineeringVar = {
  hidden: {opacity: 0},
    visible:{
      opacity: 1,
      x: ['1000px', '0px'],
      transition: {
        delay: 1,
        duration: 2.5,
      }
    },
};

const designVar = {
  hidden: {opacity: 0},
    visible:{
      opacity: 1,
      x: ['800px', '0px'],
      transition: {
        delay: 1.75,
        duration: 2.5,
      }
    },
};

const uiVar = {
  hidden: {opacity: 0},
    visible:{
      opacity: 1,
      x: ['600px', '0px'],
      transition: {
        delay: 2.5,
        duration: 2.5,
      }
    },
};

const skillsVar = {
  hidden: {opacity: 0},
    visible:{
      opacity: 1,
      y: ['-50px', '0px'],
      transition: {
        delay: 0,
        duration: 1,
      }
    },
};

const toolsVar = {
  hidden: {opacity: 0},
    visible:{
      opacity: 1,
      transition: {
        delay: 1,
        duration: 3,
      }
    },
};

const approachVar = {
  hidden: {opacity: 0},
  visible:{
    x: ['-300px', '0px'],
    opacity: 1,
    transition: {
      delay: 1,
      duration: 3,
    }
  },
};

const girlVar = {
  hidden: {opacity: 0},
  visible:{
    opacity: 1,
    transition: {
      delay: 4,
      duration: 2,
    }
  },
};

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
      variants={titleVar}
    >
      <h6 className="text-primary mb-0">What i do</h6>
          <h1 className="sm:text-4xl text-3xl font-semibold mb-0 text-white">
            Services I Offer
          </h1>
    </motion.div>
  );
}

function SkillsTitle() {
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
      variants={skillsVar}
    >
      <h6 className="text-primary mb-0 ">My toolbox</h6>
            <h1 className="sm:text-4xl text-3xl font-semibold mb-0 text-white ">
              Skills &#38; Tools
            </h1>
    </motion.div>
  );
}

function Engineering() {
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
      variants={engineeringVar}
    >
      <div className="content-center px-10 py-10 shadow rounded-xl w-11/12">
              <img src={stationary} alt="logo" className="w-1/4 mx-auto mb-3"/>
              <h6 className="text-2xl font-semibold mb-4 text-danger">Engineering</h6>
              <p className="text-white leading-6">I plan, build, and implement user interface systems for web and mobile applications to ensure responsive and satisfactory user experiences.</p>
            </div>  
    </motion.div>
  );
}

function Design() {
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
      variants={designVar}
    >
      <div className="content-center px-10 py-10 shadow rounded-xl w-11/12">
              <img src={artSupplies} alt="artSupplies" className="w-1/4 mx-auto mb-3"/>
              <h6 className="text-2xl font-semibold mb-4 text-primary">Design</h6>
              <p className="text-white leading-6">I use design tools to create high-fidelity designs and prototypes to translate my clients' brands into accessible and intuitive websites.</p>
      </div> 
    </motion.div>
  );
}

function Ui() {
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
      variants={uiVar}
    >
      <div className="content-center px-10 py-10 shadow rounded-xl w-11/12">
              <img src={phone} alt="logo" className="w-1/4 mx-auto mb-3"/>
              <h6 className="text-2xl font-semibold mb-4 text-warning">UI/UX</h6>
              <p className="text-white leading-6">I design functional and user-friendly user experiences by identifying and analyzing new and innovative digital technologies.</p>
            </div> 
    </motion.div>
  );
}


function Tools() {
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
      variants={toolsVar}
    >
      <div class="grid grid-cols-4 gap-x-16 gap-y-8 leading-none">
          <div>
            <AiFillHtml5 className="text-secondary text-7xl" ></AiFillHtml5>
            <h6 className="text-secondary pl-3 mt-3">HTML5</h6>
          </div>
          <div>
          <IoLogoCss3 className="text-secondary text-7xl" ></IoLogoCss3>
            <h6 className="text-secondary pl-3 mt-3">CSS3</h6>
          </div>
          <div>
          <SiJavascript className="text-secondary text-6xl" ></SiJavascript>
            <h6 className="text-secondary mt-3">JavaScript</h6>
          </div>
          <div>
          <SiReact className="text-secondary text-6xl" ></SiReact>
            <h6 className="text-secondary pl-3 mt-3">React</h6>
          </div>
          <div>
            <SiTailwindcss className="text-secondary text-6xl" ></SiTailwindcss>
            <h6 className="text-secondary  mt-3">Tailwind</h6>
          </div>
          <div>
          <SiAndroid className="text-secondary text-6xl" ></SiAndroid>
            <h6 className="text-secondary mt-3">Android</h6>
          </div>
          <div>
          <CgFigma className="text-secondary text-6xl" ></CgFigma>
            <h6 className="text-secondary mt-3">Figma</h6>
          </div>
          <div>
          <SiCanva className="text-secondary text-6xl" ></SiCanva>
            <h6 className="text-secondary pl-3 mt-3">Canva</h6>
          </div>
        </div>
    </motion.div>
  );
}

function Approach() {
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
      variants={approachVar}
    >

<div className="grid grid-cols-3 gap-4 gradient-background p-10 mx-16">
          <div className="col-span-2">
            <h3 className="text-2xl font-semibold text-bleachWhite mb-5">My Approach</h3>
            <p className="text-bleachWhite leading-8 font-light">"The education I received at UW-Madison has given me a solid foundation for implementing software engineering processes and the UX design thinking approach, and past experiences in the workplace have given me a deep understanding of software product development and working one-on-one with clients. In my work, I like to use an iterative approach in which my clients actively participate in the entire design process so they can feel confident that the final user interface will reflect the brand of their company. "</p>
          </div>
         
          <div className="relative">
          <Girl />
          </div>
        </div>
    
    </motion.div>
  );
}

function Girl() {
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
      variants={girlVar}
    >
       
      <img src={girl3}  className="w-5/6 mx-auto absolute bottom-5 left-14"/>
       
    </motion.div>
  );
}



export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
        <Title />

          <div class="grid grid-cols-3 gap-8 mt-20 justify-items-center mx-10">
           <Engineering />
            <Design />
            <Ui />
          </div>
          
        </div>

        {/*<div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
          </div> */}
      </div>
      <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col ">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left  md:mb-0  ">
        <div className="mx-auto relative">
          <div className="pink-background"></div>
            <SkillsTitle />
        </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 relative flex flex-col items-center mr-20">
          <Tools />
        </div>
      </div>

      <div className="container mx-auto mt-32">
       <Approach />
        
      </div>

    </section>
  );
}