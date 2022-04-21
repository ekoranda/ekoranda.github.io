import React from "react";
import NavbarExternal from "../NavbarExternal.js";
import Contact from "../Contact.js";
import Main from "../../Main.js";
import Carousel from "react-bootstrap/Carousel";
import proj2 from "../img/exercise.png";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";
import ProjectPortfolio from "../PortfolioProject";

import img1 from "./img/paperPrototype.png";
import img2 from "./img/ReactNative11.png";
import img3 from "./img/ReactNative12.png";
import img4 from "./img/ReactNative1.png";
import img5 from "./img/ReactNative2.png";
import img6 from "./img/ReactNative3.png";




import "../../styles.css";
const list = [
  {img: img4}, {img: img5}, {img: img6} ,{img: img1}, {img: img2}, {img: img3},
  ];

  const details = <div> <p className="mb-10">
  Created a fitness tracking app using React Native, Expo, and Restful APIs to allow a user to sign into the application, view their daily activity and compare to their daily goal, track exercise data, and to edit that tracked data. 
  </p>
  <p className="mb-10">
  I started off this project by creating a paper prototype to serve as a low fidelity prototype in order to ideate an intuitive user experience. Next, I used Adobe XD to create a interactive prototype adding styling elements which aimed to inspire motivation in a user. 
  </p>
  <p>
    I then used React and Restful APIs to create a fully functional version of my app, and finally I added the stylistic elements from my higher fidelity prototype utilizing CSS and Bootstrap to finish out my app.
  </p></div>

const languages = ["React-Native", "Adobe XD", "CSS", "JavaScript"];
   
export default function FitnessTracker() {

    return (
        <ProjectPortfolio title="Fitness Tracker" link="" images={list} languages={languages} desc={details}/>

    )

}