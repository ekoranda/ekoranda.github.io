import React from "react";
import Navbar from "./components/Navbar.js";
import Contact from "./components/Contact.js";
import Main from "./Main.js";
import Home from "./components/Home";
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Biocompace from "./components/Biocompace.js";
import CourseSearch from "./components/CourseSearch.js";
import FitnessTracker from "./components/FitnessTracker.js";
import Healthily from "./components/Healthily.js";
import Calendar from "./components/Calendar.js";
import PersonalPortfolio from "./components/PersonalPortfolio.js";

import "./styles.css";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biocompace" element={<Biocompace />} />
        <Route path="/courseSearch" element={<CourseSearch />} />
        <Route path="/fitnessTracker" element={<FitnessTracker />} />
        <Route path="/healthily" element={<Healthily />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/portfolio" element={<PersonalPortfolio />} />
      </Routes>
    </BrowserRouter>
    
  );
}
