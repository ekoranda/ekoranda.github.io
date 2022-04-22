import React, {useEffect, useState} from "react";
import "../styles.css";
import coffee from "./img/casual-life-3d-spilling-coffee.png";
import hike from "./img/hike.png";
import cat from "./img/cat.png";
import icecream from "./img/icecream.png";
import music from "./img/music.png";
import sticker from "./img/sticker.png";
import loading from "./img/loading.png";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Facts() {

const factList = [
    { name: 'Emily Loves coffee', img: coffee},
    { name: 'Emily likes to hike', img: hike},
    { name: 'Emily has a cat', img: cat},
    { name: 'Emily\'s favorite food is ice cream', img:icecream},
    { name: 'Emily\'s favorite composer is Debussy', img:music},  
    { name: 'Emily makes stickers in her free time', img:sticker},  
  ];
 
  
const delay = ms => new Promise(res => setTimeout(res, ms));

const loadingVar = {
    hidden: {},
      visible:{
        scale: [0.9, 1.1, 0.9, 1.1, 0.9, 1.1, 0.9],
        rotate: [0, 120, 240, 360],       
         transition: {
            duration: 3,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
        }   
      },
  };


  const WhenLoading = () => {
    const controls = useAnimation()
  
    return controls 
  }

    const [img, setImg] = useState(factList[0].img);
    const [title, setTitle] = useState(factList[0].title);
    const controls = useAnimation();
    useEffect(() => {
        if (title=="") {
          
          controls.start("visible");
        
        }
      });

     const getFact = async ()  => {
       let randNum = Math.floor(Math.random() * factList.length);
        
        // make sure random fact is not the same as current fact
        //while(title == factList[randNum].title){
          //  randNum = Math.floor(Math.random() * factList.length);
      //  }
        setImg(loading);
        setTitle("");

        //this.setState({fact: "", img: loading});
        await delay(3900);
        setImg(factList[randNum].img);
        setTitle(factList[randNum].name);
       // this.setState({fact : factList[randNum].name, img : factList[randNum].img});
    }


   
       
        return (
            <section id="facts">
                
                <div className="container px-5 py-10 mx-auto mt-20">
                    <div className="text-center mb-20">
                        <h6 className="text-primary mb-0">Get to know me</h6>
                        <h1 className="sm:text-4xl text-3xl font-semibold mb-0 text-white">Fun Facts!</h1>
                        <div className="pink-gradient2 mx-auto w-1/3 mt-16 mb-5">
                        <motion.div
                            initial="hidden"
                            variants={loadingVar}
                            animate={controls}
                            >
                            <img src={img}  className="w-1/2 mx-auto pt-16 factImg"/>
                            </motion.div>
                        </div>
                        <h1 className="sm:text-4xl text-3xl font-medium mb-0 text-white">{title}</h1>
                        <button class=" text-bleachWhite bg-gradient font-semibold py-2 px-4 rounded-full mt-7" onClick={getFact}>Generate a new fact!</button>
                    </div>
                </div>
            </section>
        );
    }

