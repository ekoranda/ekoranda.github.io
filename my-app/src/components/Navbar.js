// src/components/Navbar.js

import { ArrowRightIcon } from "@heroicons/react/solid";

import { PhoneIcon} from "@heroicons/react/solid"; 

import CircleSvg from "./circleSvg";


import React, { useState } from "react";
import "../styles.css";

import { motion } from "framer-motion"





 

class Navbar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      link: 'about',
    }

    // This binding is necessary to make `this` work in the callback
  }
 
  addOval(linkName){
    console.log(linkName);
    this.setState({link: linkName});


  }

  getLinkColor(linkName){
    let currentLink = this.state.link;
    if(currentLink == linkName){
      return "text-white";
    }else{
      return "hover:text-white";
    }
    
  }
  

  render(){

    const circle = <CircleSvg key="circleSVG"/>;
  return (

    
    <header className="bg-dark-transparent md:sticky top-0 z-10">
      <div className="example-container">
      </div>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0" >
          <a href="#emily" className="ml-3 text-xl" onClick={() => this.addOval('emily')}>
            Emily
            
          </a>
        </a>
        <nav className="md:mr-auto md:ml-auto md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center">
          
          <a href="#about" className="mr-12 hover:text-white text-secondary relative sink"  onClick={() => this.addOval('about')}>
            <span className={this.getLinkColor('about')}>About</span>
            {<CircleSvg name="about" current={this.state.link}/>}
          </a>
          <a href="#skills" className="mr-12 hover:text-white text-secondary relative sink" onClick={() => this.addOval('skills')}>
            
            <span className={this.getLinkColor('skills')}>Skills</span>
            {<CircleSvg name="skills" current={this.state.link}/>}
          </a>
          <a href="#portfolio" className="mr-12 hover:text-white text-secondary relative sink" onClick={() => this.addOval('portfolio')}>
            <span className={this.getLinkColor('portfolio')}>Portfolio</span>
            {<CircleSvg name="portfolio" current={this.state.link}/>}
          </a>
          <a href="#facts" className="mr-12 hover:text-white text-secondary relative sink" onClick={() => this.addOval('facts')}>
            <span className={this.getLinkColor('facts')}>Fun Facts!</span>
            {<CircleSvg name="facts" current={this.state.link}/>}
          </a>
        </nav>
        
        <div className="inline-flex items-center relative">
          
          <a
          href="#contact"
          className="btn btn-white btn-animate">
          <PhoneIcon className="w-4 h-4 mr-2 hover:animate-bounce inline-flex" />
          Let's Talk
          
        </a>
        </div>
      </div>
    </header>
  );
}

} export default Navbar;