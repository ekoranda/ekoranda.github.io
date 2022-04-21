import React from "react";
import NavbarExternal from "../NavbarExternal.js";
import Contact from "../Contact.js";
import Main from "../../Main.js";
import Carousel from "react-bootstrap/Carousel";
import proj5 from "../img/portfolio.png";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";
import ProjectPortfolio from "../PortfolioProject";
import img1 from "./img/portfolio1.png";
import img2 from "./img/portfolio2.png";
import img3 from "./img/portfolio3.png";



import "../../styles.css";
const list = [
    { img: proj5}, { img: img1}, { img: img2}, { img: img3}
  ];

  const details = <div> <p className="mb-10">
      Created a personal portfolio built in React from scratch with custom components, animations, and responsive design
  </p>
  <p className="mb-10">
    I started my process by finding inspiration from researching other digital portfolios and by exploring UI designs on dribble and Behance. Next I researched what colors and fonts would best portray my vision, where I was inspired by an artist who created 3d illustrations shown above and created a prototype of the design in Figma. 
  </p>
  <p>
  Finally I implemented my design using React, Tailwinds, Framer, and other various libraries to help me achieve a portfolio that could best display my skills. 
  </p></div>

const languages = ["React", "TailWind", "JavaScript", "Framer", "Figma"];
   
export default function PortfolioProject() {

    return (
        <ProjectPortfolio title="Personal Portfolio" link="" images={list} languages={languages} desc={details}/>

    )

}