import React from "react";
import "../styles/main.css";
import InfoCard from "../components/InfoCard/InfoCard";
import About from "../components/About/About";
import WorkExperience from "../components/WorkExperience/WorkExperience";
import Education from "../components/Education/Education";
import Skills from "../components/Skills/Skills";

const IndexPage = () => (
  <div className="border-t-8 border-gray-700">
    <div className="container pt-16">
      <div className="lg:-mx-8 lg:flex">
        <div className="self-start lg:sticky top-4 lg:w-1/4 lg:px-8">
          <InfoCard />
        </div>
        <div className="lg:w-3/4 lg:px-8">
          <About />
          <WorkExperience />
          <Skills />
          <Education />
        </div>
      </div>
    </div>
  </div>
);

export default IndexPage;
