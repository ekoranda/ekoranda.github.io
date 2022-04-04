import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";
import "../styles.css";
import ScrollMenu from 'react-horizontal-scroll-menu';

// list of items
const list = [
  { name: 'Project Name 1'},
  { name: 'Project Name 2' },
  { name: 'Project Name 3' },
  { name: 'Project Name 4' },
  { name: 'Project Name 5' },
  { name: 'Project Name 6' },

];
 
// One item component
// selected prop will be passed
const MenuItem = ({text, selected}) => {
  return (
    <div className={`menu-item ${selected ? 'active' : ''}`, `p-7` }>
      <div className="flex justify-center">
        <div className="proj-shadow">
          <div className="projLogo w-64 h-48">
          </div>
          <div className="projLabel bg-white py-3 px-3">
            <p className="text-dark font-semibold">{text}</p>
            <p className="text-danger">CSS, HTML, Bootstrap</p>
          </div>
        
        </div>
      </div>
    </div>);
};
 
// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map(el => {
    const {name} = el;
 
    return <MenuItem text={name} key={name} selected={selected} />;
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
    // call it again if items count changes
    this.menuItems = Menu(list, selected);
  }
 
  state = {
    selected
  };
 
  onSelect = key => {
    this.setState({ selected: key });
  }
 
 
  render() {
    const { selected } = this.state;
    // Create menu from items
    const menu = this.menuItems;
 
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
