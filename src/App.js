import React from "react";
import "./index";
import "./index.css"
import Home from "./routs/home";
import Project from "./routs/project";
import About from "./routs/about";
import Contact from "./routs/contact";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/project" element={<Project/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
   </Routes>
   </>
  );
}

export default App;
