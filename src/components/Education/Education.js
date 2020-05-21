import React from "react";
import EducationItem from "./EducationItem";

// TODO
// move this crap to markdown most likely?
const schools = [
  {
    name: "Philologist in English and American Studies specialising in English",
    type: "Bachelor's",
    university: "University of West Hungary",
    duration: "2009-2012",
  },
  {
    name: "English Language and Linguistics",
    type: "Master's",
    university: "University of Vienna",
    duration: "2013-",
    description:
      "Not finished due to a rather stark career change. I have, however, completed 40 credits towards an MA in English Language and Linguistics. Very much enjoyed the course and may get back to it sometime.",
  },
];

const Education = () => (
  <>
    <h2>Education</h2>
    <ul>
      {schools.map(({ name, type, university, duration, description }) => (
        <EducationItem
          name={name}
          type={type}
          university={university}
          duration={duration}
          description={description}
        />
      ))}
    </ul>
  </>
);

export default Education;
