import React from "react";
import NavbarExternal from "../NavbarExternal.js";
import Contact from "../Contact.js";
import Main from "../../Main.js";
import Carousel from "react-bootstrap/Carousel";
import proj4 from "../img/calendar.png";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";
import ProjectPortfolio from "../PortfolioProject";
import img1 from "./img/calendar1.png";
import img2 from "./img/calendar2.png";
import img3 from "./img/calendar3.png";
import img4 from "./img/calendar4.png";



import "../../styles.css";
const list = [
    { img: proj4}, {img: img1}, {img: img2}, {img: img3}, {img: img4},
  ];

  const details = <div> <p className="mb-10">
      Identified problems with the existing Canvas calendar, and redesigned it from the ground up using contextual inquiries durring the ideate and evaluation stages and used figma to create interactive prototypes. 

  </p>
  <p className="mb-10"> 
  The goal of this project was to redesign a web application where the design was guided by real user's experiences and insight.  We conducted contextual inquiries (CIs) by interviewing Canvas users using the talk aloud method, using affinity diagraming to gain insight on our observations, and modeling to help identify componenets to we can improve on. 

   </p>
  <p>
      We then created a low-fidelity prototype using Figma keeeping in mind the insight learned from the CIs, built an interactive high-fideltiy prototype, and then conducted another set of interviews to better improve our final solution. 
  </p></div>

const languages = ["Figma", "Talk-aloud", "Modeling"];
   
export default function Calendar() {

    return (
        <ProjectPortfolio title="Calendar" link="https://github.com/ekoranda/biocompace-request" images={list} languages={languages} desc={details}/>

    )

}