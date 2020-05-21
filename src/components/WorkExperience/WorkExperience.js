import React from "react";
import WorkItem from "./WorkItem";

// TODO
// move this crap to markdown most likely?
const jobs = [
  {
    title: "Software developer",
    isFullTime: true,
    company: "bimspot",
    place: "Vienna, AUT, remote",
    duration: "2019 May -",
    description: `My main responsibilites are developing client side web interfaces, working in close connection with the backend and UX/UI teams. Our current frontend stack is largely based on React which I very much enjoy working with. I place considerable emphasis on writing robust solutions with regard to application-level state management and business logic. I also frequently collaborate with our backend team, often working on our node.js based gateway solutions as well as doing regular code reviews. In line with the company's values and culture, I find it imperative to write high quality and well documented code.`,
  },
  {
    title: "Front-end developer",
    isFullTime: true,
    company: "UNAS",
    place: "Sopron, HU",
    duration: "2017 October - 2018 August",
    description: "",
  },
  {
    title: "English tutor",
    isFullTime: false,
    company: "Self employed",
    place: "Sopron, HU",
    duration: "2012 -",
    description: `I've been giving private lessons for a number of years now, preparing students for various locally and internationally recognised exams. I've also helped my students prepare for their studies or employment opportunities abroad. I enjoy collaborative and creative work and mostly prefer working with those who already have at least basic/intermediate competence in the language. I'm also interested in the area of linguistics, with a focus on applied linguistics in particular.`,
  },
];

const WorkExperience = () => (
  <>
    <h2>Work experience</h2>
    <ul>
      {jobs.map(
        ({ title, isFullTime, company, place, duration, description }) => (
          <WorkItem
            title={title}
            isFullTime={isFullTime}
            company={company}
            place={place}
            duration={duration}
            description={description}
          />
        )
      )}
    </ul>
  </>
);

export default WorkExperience;
