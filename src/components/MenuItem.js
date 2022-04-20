import React from "react";
import "../styles.css";

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.text = this.props.text;
    this.tools = this.props.tools;
    this.pic = this.props.pic;
    this.selected = this.props.selected;
    
  }

  render(){
    return (
      <div className={`menu-item ${this.selected ? 'active' : ''}`, `p-7` } >
        <div className="flex justify-center">
          <div className="proj-shadow">
            <div className="projLogo w-64 h-48 p-3">
            <img src={this.pic}  className="projImg"/>
            </div>
            <div className="projLabel bg-white py-3 px-3">
              <p className="text-dark font-semibold">{this.text}</p>
              <p className="text-danger">{this.tools}</p>
            </div>
          
          </div>
        </div>
      </div>);
  }
}export default MenuItem;
