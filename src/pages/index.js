import React from "react";
import "../styles/main.css";
import InfoCard from "../components/InfoCard/InfoCard";
import About from "../components/About/About";
import WorkExperience from "../components/WorkExperience/WorkExperience";
import Education from "../components/Education/Education";
import Skills from "../components/Skills/Skills";

const IndexPage = () => (
  <div className="container">
    <InfoCard />
    <About />
    <WorkExperience />
    <Skills />
    <Education />
  </div>
);

export default IndexPage;
