import React from "react";
import "../styles.css";
import MenuItem from "./MenuItem";
import "react-multi-carousel/lib/styles.css";


import proj1 from "./img/Courses.png";
import proj2 from "./img/exercise.png";
import proj3 from "./img/healthily.png";
import proj4 from "./img/calendar.png";
import proj5 from "./img/portfolio.png";
import proj6 from "./img/biocompace.png";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';

import Carousel from "react-multi-carousel";


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};



// list of items
const list = [
  { name: 'Course Search Reimagined', tools: 'React, Bootstrap, CSS', pic: proj1, id:"courseSearch"},
  { name: 'Fitness Tracker', tools: 'React-native, CSS', pic: proj2, id:"fitnessTracker" },
  { name: 'Healthi.ly', tools: 'Android, Kotlin, Firebase', pic: proj3, id:"healthily" },
  { name: 'Canvas Calendar Reimagined', tools: 'Figma, talk-aloud, modeling', pic: proj4 , id:"calendar"},
  { name: 'Personal Portfolio', tools: 'React, Tailwind, Figma', pic: proj5, id:"portfolio" },
  { name: 'Biocompace Project', tools: 'Java, BPMN, Wildfly, SAML', pic: proj6, id: "biocompace" },

];
 
// One item component
// selected prop will be passed

 
// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map(el => {
    const {name} = el;
    
    return <MenuItem text={name} tools={el.tools} key={name} selected={selected} pic={el.pic} />;
  });
 
 
const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};
 
 
const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });
 
const selected = 'item1';
 
class Testimonials extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      selected: "",
    };

  
    // call it again if items count changes
   
  }
 

 
  onSelect = (key) => {
    this.setState({ selected: key });
    //console.log(key);
    for(let i = 0 ; i < list.length; i++){
      //console.log(list[i]);
      if(list[i].name == key){
        console.log(list[i]);
      }
    }

  }


   
 
  render() {
    // Create menu from items
    const menu = Menu(list, this.state.selected);
    

 
    return (
      <div id="portfolio" className="App mt-20 ">
        <div className="text-center mb-10">
        <h6 className="text-primary mb-0 mx-auto">Some of my projects</h6>
          <h1 className="sm:text-4xl text-3xl font-semibold mb-0 text-white mx-auto">
            My Work.
          </h1>
        </div>
       

        <Carousel responsive={responsive} infinite={true} containerClass="carousel-container" keyBoardControl={true} removeArrowOnDeviceType={["tablet", "mobile"]} deviceType={this.props.deviceType} itemClass="carousel-item-padding-40-px" className="mx-10 ">
        {Array.from({ length: list.length }).map((_, idx) => (
                    <Col>
                      <Card className="projCard mr-2" onClick={event =>  window.location.href = "/" + list[idx].id } >
                        <Card.Img variant="top" src={list[idx].pic} className="py-3 px-3"/>
                        <Card.Body>
                          <Card.Title>{list[idx].name}</Card.Title>
                          <Card.Text>
                            {list[idx].tools}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
        </Carousel>

      

        
       
      </div>
      
    );
  }
} export default Testimonials;
