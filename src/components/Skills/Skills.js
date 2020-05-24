import React from "react";
import { CheckmarkIcon } from "../../images/SvgIcons";

const skills = ["JavaScript", "React", "Node", "MongoDB", "Docker", "CI/CD"];

const SkillItem = ({ name }) => (
  <li className="flex items-center">
    <CheckmarkIcon className="w-4 h-4 mr-1" /> {name}
  </li>
);

const Skills = () => (
  <>
    <h2 className="text-4xl font-bold">Professional skills</h2>
    <ul>
      {skills.map(skill => (
        <SkillItem name={skill} key={skill} />
      ))}
    </ul>
  </>
);

export default Skills;
