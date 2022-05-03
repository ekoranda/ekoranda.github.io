import React, {useEffect, useState} from "react";
import "../styles.css";
import NavbarExternal from "./NavbarExternal";
import Contact from "./Contact";
import { FaBriefcase, FaRegLightbulb , FaLinkedinIn, FaGlobe, FaGithub, FaGraduationCap, FaTerminal} from 'react-icons/fa';
import {FiMail} from "react-icons/fi";

export default function Resume() {
    return (
        <main className="text-white bg-dark body-font">
            <NavbarExternal />
            <div className="resume mx-32 my-16">
            <div class="grid grid-cols-3 gap-4 p-20">
                <div class="col-span-2 ... pr-3">
                    <h1 className="text-4xl mb-3 font-bold">EMILY KORANDA</h1>
                    <h6 className="text-md font-light mb-3 text-warning">SOFTWARE ENGINEER AND UI/UX DESIGNER</h6>
                    <hr className="mb-3 text-warning"></hr>

                    <p className="mb-3 font-normal text-secondary">I enjoy using my design skills to create visually appealing applications and
                    collaborating with clients to develop solutions customized to fit their unique
                    needs. In my ideal position, I would combine my interest in design with my
                    technical expertise to create fully integrated front-end systems where not only
                    is the technical implementation influenced by the design, but the design is
                    developed with the underlying technologies in mind. Achieving the best of both
                    worlds, and creating a great user experience.
                    </p>
                    <h6 className="text-2xl mb-3 font-bold inline-flex"><FaBriefcase className="mr-3" />Work Experience</h6>
                    <hr className="mb-3"></hr>
                    <h6 className="text-md text-warning mb-2 font-light">SOFTWARE ENGINEER</h6>
                    <h6 className="text-md text-white mb-2 underline">Implicit Technologies (2021 - current)</h6>
                    <p className="text-secondary">&#8226; Designed novel interfaces ground the ground up working closely with clients</p>
                    <p className="text-secondary">&#8226; Developed rapid prototypes to receive customer feedback</p>
                    <p className="text-secondary">&#8226; Researched and evaluated suitable technologies to meet business needs</p>
                    <p className="mb-3 text-secondary">&#8226; Developed complete front-end systems iteratively from UI/UX design through software implementation using modern web technologies, including JavaScript, React, Tailwind, etc.</p>
                    <h6 className="text-md text-warning mb-2 font-light">SOFTWARE ENGINEER</h6>
                    <h6 className="text-md text-white mb-2 underline">Research Data and Communications Technology (Summer 2019 and Summer 2020)</h6>
                    <p className="text-secondary">&#8226; Designed an intuitive request system to allow non-technical scientists to request high-performance computing resources securely and efficiently</p>
                    <p className="text-secondary">&#8226; Built graphical tools to allow privileged managers to easily define business rules for requests</p>
                    <p className="text-secondary mb-5">&#8226; Utilized Imixs-Workflow, an open-source business process management library utilizing BPMN 2.0 logic</p>
                    <h6 className="text-2xl mb-3 font-bold inline-flex"><FaRegLightbulb className="mr-3" />My Projects</h6>
                    <hr className="mb-3"></hr>
                    <h6 className="text-md text-white mb-2 font-light">Housing Advertisement Web Application (2021 - Current)</h6>
                    <p className="text-secondary mb-3">Designed and built a frontend web application for a Madison, WI based housing advertising firm built specifically to be modern, fast, and interactive to increase user retention and revenue</p>
                    <h6 className="text-md text-white mb-2 font-light">IEP Dashboard Prototype (2022 - Current)</h6>
                    <p className="text-secondary mb-3">Created a high fidelity prototype of a secure dashboard for an organization specializing in IEP, built to help parents and caseworkers manage each individual student. Allowed for customer to decide how to move forward building their application</p>
                    <h6 className="text-md text-white mb-2 font-light">Healthi.ly Android Application (2021)</h6>
                    <p className="text-secondary mb-3">Built an Android app that derived relevant health metrics from cellphone sensor data to generate suggestions for improving a user’s health, relevant to the user’s geographical location</p>
                    <h6 className="text-md text-white font-light">Personal Portfolio (2022 - Current)</h6>
                    <p className="text-secondary mb-3" >Developed a personal portfolio built in React from scratch with custom components, animations, incorporating the principles of responsive design</p>
                </div>
                <div class="... pl-3">
                    <p className="text-secondary mb-2 inline-flex"><FiMail className="mr-5"/>ekoranda1@gmail.com</p>
                    <p className="text-secondary mb-2 inline-flex"><FaLinkedinIn className="mr-5"/>https://www.linkedin.com/in/emily-koranda/</p>
                    <p className="text-secondary mb-2 inline-flex"><FaGlobe className="mr-5"/>www.emilykatekoranda.com</p>
                    <p className="text-secondary mb-5 inline-flex"><FaGithub className="mr-5"/>github.com/ekoranda</p>
                    <h6 className="text-2xl inline-flex font-bold mb-3"><FaGraduationCap className="mr-3"/>My Education</h6>
                    <hr className="mb-3"></hr>
                    <h6 className="text-md text-warning mb-2 font-light">BACHELOR OF SCIENCE IN COMPUTER SCIENCE MINOR IN DIGITAL STUDIES</h6>
                    <h6 className="text-md text-white mb-3 underline">University of Wisconsin - Madison (2018 - 2022)</h6>
                    <p className="text-secondary inline-flex mb-2"><div className="font-bold">MAJOR GPA : </div> 3.76 / 4.00</p>
                    <p className="text-secondary  mb-2" >Girls Who Code (2016 - 2019)</p>
                    <p className="text-secondary  mb-2" >Dean's List (5x)</p>
                    <p className="text-secondary  mb-3 font-bold underline" >Relevant coursework:</p>
                    <p className="text-secondary mb-2">&#8226; Building User Interfaces, HumanComputer Interaction, Software Engineering, Database Management Systems</p>
                    <p className="text-secondary mb-2">&#8226; Data Structures, Machine Organization and Optimization, Algorithms, Operating Systems, Intro to AI</p>
                    <p className="text-secondary mb-3">&#8226; GeoComputing, Digital Globe: GIScience and Tech, Information Security and Privacy</p>
                    <h6 className="text-2xl inline-flex font-bold mb-3"><FaTerminal className="mr-3"/> Skills</h6>
                    <hr className="mb-3"></hr>
                    <h6 className="text-md text-warning mb-2 font-light">Technical Skills</h6>
                    <p className="text-secondary mb-2"><strong>Proficient</strong> in JavaScript, CSS, React, React-Native, jQuery, Tailwind, Bootstrap, Android, Kotlin, Java, C, Python, SQL and NoSQL, Linux, and Git</p>
                    <p className="text-secondary mb-2"><strong>Familar</strong> with Apache Tomcat, Wildfly, and AWS</p>
                    <h6 className="text-md text-warning mb-2 font-light">Methodologies</h6>
                    <p className="text-secondary mb-2"><strong>Experience</strong> with agile software development, UX and software design patterns, responsive design, rapid prototyping, and customer discovery</p>
                    <h6 className="text-md text-warning mb-2 font-light">UI/UX Tools</h6>
                    <p className="text-secondary ">Figma, AdobeXD, Photoshop, Premeire</p>
                </div>
              
                </div>
            </div>
            <Contact />
        </main>
    );
}

