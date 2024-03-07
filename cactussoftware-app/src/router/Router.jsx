import React from "react";
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import Home from "../components/home/Home";
import Contact from "../components/contact/Contact";
import About from "../components/about/About";
import Docs from "../components/docs/Docs";
import { lazy } from "react";
import Projects from "../components/projects/Projects";

let Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="docs" element={<Docs />}>
            <Route path="" lazy={() => import('./ChildrenRouter')} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router;
