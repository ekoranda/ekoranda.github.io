import React from "react";
import "../styles.css";
import coffee from "./casual-life-3d-spilling-coffee.png";


class Facts extends React.Component {
    render(){
        return (
            <section id="facts">
                
                <div className="container px-5 py-10 mx-auto mt-20">
                    <div className="text-center mb-20">
                        <h6 className="text-primary mb-0">Get to know me</h6>
                        <h1 className="sm:text-4xl text-3xl font-semibold mb-0 text-white">Fun Facts!</h1>
                        <div className="pink-gradient2 mx-auto w-1/3 mt-16">
                            <img src={coffee}  className="w-1/2 mx-auto pt-16"/>
                        </div>
                        <h1 className="sm:text-4xl text-3xl font-medium mb-0 text-white">Emily <span className="font-bold">loves</span> coffee!</h1>
                        <button class=" text-bleachWhite bg-gradient font-semibold py-2 px-4 rounded-full mt-7">Generate a new fact!</button>
                    </div>
                </div>
            </section>
        );
    }
}export default Facts;
