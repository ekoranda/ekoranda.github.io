import React from "react";
import NavbarExternal from "../NavbarExternal.js";
import Contact from "../Contact.js";
import Main from "../../Main.js";
import Carousel from "react-bootstrap/Carousel";
import proj1 from "../img/Courses.png";
import img1 from "../img/courseSearch1.png";
import img2 from "../img/courseSearch2.png";
import img3 from "../img/courseSearch3.png";
import img4 from "../img/courseSearch4.png";
import lowFidel1 from "./img/React-1.jpg";



import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";
import ProjectPortfolio from "../PortfolioProject";



import "../../styles.css";

const list = [
     {img: proj1}, {img:img1}, {img:img2}, {img:img4}, {img:lowFidel1}
  ];

  const details = <div> <p className="mb-10">
      Identified problems with the existing UW-Madison Course Search, and Enroll and redesigned it from the ground up using React to create a more intuitive and pleasant user experience utilizing real course data via REST API.
  </p>
  <p className="mb-10">
      I started this project by studying thee current course search website and identifying user experience that could be improved upon and brainstorming some possible fixes. Then I sketched out a quick low fidelity prototype, identifying design elements I plan to implement.
  </p>
  <p>
      Next I created a higher fidelity prototype in Figma, choosing a color pallete and fonts that I identified as both visually appealing but not distracting from the content. Then finally I created my final product, utilizing React, Bootstrap and real course data via REST API.
  </p>
  </div>

const languages = ["React", "CSS", "Bootstrap", "JavaScript"];
   
export default function Biocompace() {

    return (
        <ProjectPortfolio title="Course Search" link="" images={list} languages={languages} desc={details}/>

    )

}