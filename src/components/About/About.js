import React from "react";
import FancyUnderline from "../FancyUnderline";

const About = () => (
  <>
    <div className="relative inline-block">
      <h2 className="relative z-10 mb-2 text-3xl font-bold text-indigo-700">
        About
      </h2>
      <FancyUnderline />
    </div>
    <p>
      Full-stack JavaScript engineer currently specialising in frontend,
      React.js development. Serious about code quality, peer review and good
      documentation. Frequently involved in making an idea go from conception to
      deployment.{" "}
      <a
        href="https://github.com/barnabasmolnar"
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold text-indigo-700 underline"
      >
        Occasional open sourcerer
      </a>{" "}
      and{" "}
      <a
        href="https://barna-molnar.medium.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold text-indigo-700 underline"
      >
        writer
      </a>
      . Intrigued by Functional Programming and Haskell as of late.
    </p>
  </>
);

export default About;
