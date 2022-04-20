import React from "react";
import "../styles.css";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import MenuItem from "./MenuItem";

import proj1 from "./img/Courses.png";
import proj2 from "./img/exercise.png";
import proj3 from "./img/healthily.png";
import proj4 from "./img/calendar.png";
import proj5 from "./img/portfolio.png";
import proj6 from "./img/biocompace.png";



// list of items
const list = [
  { name: 'Course Search Reimagined', tools: 'React, Bootstrap, CSS', pic: proj1},
  { name: 'Fitness Tracker', tools: 'React-native, CSS', pic: proj2 },
  { name: 'Healthi.ly', tools: 'Android, Kotlin, Firebase', pic: proj3 },
  { name: 'Canvas Calendar Reimagined', tools: 'Figma, talk-aloud, modeling', pic: proj4 },
  { name: 'Personal Portfolio', tools: 'React, Tailwind, Figma', pic: proj5 },
  { name: 'Biocompace Project', tools: 'Java, BPMN, Wildfly, SAML', pic: proj6 },

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
      <div id="portfolio" className="App mt-20 ml-20">
        <div className="text-center mb-10">
        <h6 className="text-primary mb-0 mx-auto">Some of my projects</h6>
          <h1 className="sm:text-4xl text-3xl font-semibold mb-0 text-white mx-auto">
            My Work.
          </h1>
        </div>
       
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
        />

      

        
       
      </div>
      
    );
  }
} export default Testimonials;
