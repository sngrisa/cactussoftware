import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Steps from '../components/docs/steps/Steps';
import BackFront from '../components/docs/backFront/BackFront';
import Techs from '../components/docs/techs/Techs';

const ChildrenRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="steps" element={<Steps />} />
          <Route path="backfront" element={<BackFront />} />
          <Route path="tech" element={<Techs />} />
        </Routes>
      </Router>
    </>
  )
}

export default ChildrenRouter;
