import React from "react";
import { CheckmarkIcon } from "../../images/SvgIcons";

const skills = ["JavaScript", "React", "Node", "MongoDB", "Docker", "CI/CD"];

const SkillItem = ({ name }) => (
  <li className="flex items-center">
    <CheckmarkIcon className="w-4 h-4 mr-1 text-indigo-500" /> {name}
  </li>
);

const Skills = () => (
  <>
    <div className="relative inline-block">
      <h2 className="relative z-10 mb-2 text-3xl font-bold text-indigo-700">
        Professional skills
      </h2>
      <div className="absolute z-0 w-full h-3 bg-purple-200 opacity-50 bottom-3"></div>
    </div>
    <ul>
      {skills.map(skill => (
        <SkillItem name={skill} key={skill} />
      ))}
    </ul>
  </>
);

export default Skills;
