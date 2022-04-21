import React from "react";
import NavbarExternal from "./NavbarExternal.js";
import Contact from "./Contact.js";
import Main from "../Main.js";
import Carousel from "react-bootstrap/Carousel";
import proj6 from "./img/biocompace.png";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";



import "../styles.css";


export default function ProjectPortfolio(props) {

    const list = [
        { img: proj6},
      ];

    return (<main className="text-white bg-dark body-font">
    <NavbarExternal />
    <Row><a className="text-3xl text-center py-5 text-bleachWhite  animate-charcter githubLink" href={props.link}>{props.title}</a></Row>
    
    <Carousel className="px-52">
    {Array.from({ length: props.images.length }).map((_, idx) => (
        <Carousel.Item>
        <img
          className="d-block w-100 projectImg"
          src={props.images[idx].img}
          alt="First slide"
        />
            </Carousel.Item>
    ))}
     
     </Carousel>
     <Row className="px-52 py-2" style={{textAlign: 'right'}}>
         <div>
         {Array.from({ length: props.languages.length }).map((_, idx) => (
             <Badge className="lightBadgeTeal ml-2" text="dark">{props.languages[idx]}</Badge>
        ))}
         </div>
     </Row>
     <Row className="mx-52 my-10 transparentBg p-10">
       {props.desc}
     </Row>
 <Contact />
 </main>)
}

