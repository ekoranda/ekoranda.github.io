import React from "react";
import "../styles.css";
import coffee from "./img/casual-life-3d-spilling-coffee.png";
import hike from "./img/hike.png";
import cat from "./img/cat.png";
import icecream from "./img/icecream.png";
import music from "./img/music.png";
import sticker from "./img/sticker.png";

const factList = [
    { name: 'Emily Loves coffee', img: coffee},
    { name: 'Emily likes to hike', img: hike},
    { name: 'Emily has a cat', img: cat},
    { name: 'Emily\'s favorite food is icecream', img:icecream},
    { name: 'Emily\'s favorite composer is Debussy', img:music},  
    { name: 'Emily makes stickers in her free time', img:sticker},  
  ];
 
  
class Facts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          fact : factList[0].name,
          img: factList[0].img
    
        };
        this.getFact = this.getFact.bind(this);
    }

    getFact() {
        let randNum = Math.floor(Math.random() * factList.length);
        
        // make sure random fact is not the same as current fact
        while(this.state.fact == factList[randNum].name){
            randNum = Math.floor(Math.random() * factList.length);
        }
        this.setState({fact : factList[randNum].name, img : factList[randNum].img})
    }
    render(){
        return (
            <section id="facts">
                
                <div className="container px-5 py-10 mx-auto mt-20">
                    <div className="text-center mb-20">
                        <h6 className="text-primary mb-0">Get to know me</h6>
                        <h1 className="sm:text-4xl text-3xl font-semibold mb-0 text-white">Fun Facts!</h1>
                        <div className="pink-gradient2 mx-auto w-1/3 mt-16 mb-5">
                            <img src={this.state.img}  className="w-1/2 mx-auto pt-16 factImg"/>
                        </div>
                        <h1 className="sm:text-4xl text-3xl font-medium mb-0 text-white">{this.state.fact}</h1>
                        <button class=" text-bleachWhite bg-gradient font-semibold py-2 px-4 rounded-full mt-7" onClick={this.getFact}>Generate a new fact!</button>
                    </div>
                </div>
            </section>
        );
    }
}export default Facts;
