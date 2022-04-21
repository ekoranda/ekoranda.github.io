// src/components/Navbar.js
import { PhoneIcon} from "@heroicons/react/solid"; 


import React from "react";
import "../styles.css";

class NavbarExternal extends React.Component {

  constructor(props) {
    super(props);

  

    // This binding is necessary to make `this` work in the callback
  }
 
 

  

  render(){

   
  return (

    
    <header className="bg-dark-transparent md:sticky top-0 z-10">
      <div className="example-container">
      </div>
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white md:py-1 items-center" >
          <a href="#emily" className="ml-3 text-xl emily" onClick={event =>  window.location.href='/'}>
            Emily  
          </a>
        </a>
        <nav className="md:mr-auto md:ml-auto md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center">
          
          <a href="#about" className="mr-12 hover:text-white text-secondary relative sink"  onClick={event =>  window.location.href='/#about'}>
            <span >About</span>
           
          </a>
          <a href="#skills" className="mr-12 hover:text-white text-secondary relative sink" onClick={event =>  window.location.href='/#skills'}>
            
            <span >Skills</span>
           
          </a>
          <a href="#portfolio" className="mr-12 hover:text-white text-secondary relative sink" onClick={event =>  window.location.href='/#portfolio'}>
            <span >Portfolio</span>
           
          </a>
          <a href="#facts" className="mr-12 hover:text-white text-secondary relative sink" onClick={event =>  window.location.href='/#facts'}>
            <span >Fun Facts!</span>
           
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

} export default NavbarExternal;