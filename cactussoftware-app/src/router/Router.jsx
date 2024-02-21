import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import Contact from "../components/contact/Contact";
import About from "../components/about/About";
import Dashboard from "../components/dashboard/Dashboard";
import Docs from "../components/docs/Docs";
import BackFront from "../components/docs/backFront/BackFront";
import Steps from "../components/docs/steps/Steps";
import Techs from "../components/docs/techs/Techs";

let Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="docs" element={<Docs />} />
          <Route path="backfront" element={<BackFront />} />
          <Route path="steps" element={<Steps />} />
          <Route path="tech" element={<Techs />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router;
