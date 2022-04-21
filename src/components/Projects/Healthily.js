import React from "react";
import NavbarExternal from "../NavbarExternal.js";
import Contact from "../Contact.js";
import Main from "../../Main.js";
import Carousel from "react-bootstrap/Carousel";
import proj3 from "../img/healthily.png";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";
import ProjectPortfolio from "../PortfolioProject";
import img1 from "./img/healthily1.png";
import img2 from "./img/healthily2.png";
import img3 from "./img/healthily3.png";
import img4 from "./img/healthily4.png";
import img5 from "./img/healthily5.png";
import img6 from "./img/healthily6.png";


import "../../styles.css";
const list = [
    { img: proj3}, {img: img1}, {img: img2}, {img: img3}, {img: img4}, {img: img5}, {img: img6},
  ];

  const details = <div> <p className="mb-10">
      Built an Android app that derived important health metrics from user’s using cellphone sensor data to generate suggestions for improving a user’s health, relevant to the user’s geographical location.

  </p>
  <p className="mb-10">
    This was a semester long, group project for software engineering meant to introduce us to the agile software process. 
    The goal of our project was to collect user data from google fit like their step count and their heart points, and if the user didn’t reach their goal in the past week, display to them personalized and local recommendations based on the time of day, user goals, and geographical location. 
  </p>
    We used a MVVM architecture, utilitized Google Fit and Google Maps APIs to collect user data, and Firebase to store and access that data. 
  <p>
  </p></div>

const languages = ["Android", "Kotlin", "Firebase", "Google Maps API"];
   
export default function Healthily() {

    return (
        <ProjectPortfolio title="Healthi.ly" link="https://github.com/ekoranda/biocompace-request" images={list} languages={languages} desc={details}/>

    )

}