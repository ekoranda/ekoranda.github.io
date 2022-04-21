import React from "react";
import NavbarExternal from "./NavbarExternal.js";
import Contact from "./Contact.js";
import Main from "../Main.js";
import Carousel from "react-bootstrap/Carousel";
import proj2 from "./img/exercise.png";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";
import ProjectPortfolio from "./PortfolioProject";



import "../styles.css";
const list = [
    { img: proj2},
  ];

  const details = <div> <p className="mb-10">
  The African Centers of Excellence in Bioinformatics program leverages an existing African Centers of Excellence program in Mali and provides high-performance computing (HPC) infrastructure and training on advanced biomedical data analysis to research institutes in Africa. It empowers African researchers to utilize computing resources and perform advanced biomedical data analysis, while creating an independent community of Bioinformatics specialists to encourage sharing of data, best practices and collaborative projects.
  </p>
  <p className="mb-10">
  The Biocompace-Request service was created to provide extensible workflow management for submitting, reviewing, and managing proposals for HPC resources provided by the Biocompace project. It creates a platform for researchers to submit proposals for HPC resources as well as software tools. Reviewers may then approve or deny the proposal. At least two reviewers must approve the proposal, or else the workflow process ends. After two reviewers approve it the workflow assigns the proposal to the system administrator who can review the approved request before provisioning resources.
  </p>
  <p>
  The Biocompace-Request service is built upon the Imixs Workflow engine. The Imixs Workflow engine (Imixs) is an open source workflow engine based on the Java Enterprise Architecture (JEE). Imixs provides components to build human-centric workflow applications within a flexible framework. It controls business processes and distributes tasks within an organization as well as ensures that all tasks are processed in accordance to any compliance guidelines and business rules.
  </p></div>

const languages = ["React-Native", "Adobe XD", "CSS", "JavaScript"];
   
export default function FitnessTracker() {

    return (
        <ProjectPortfolio title="Fitness Tracker" link="" images={list} languages={languages} desc={details}/>

    )

}