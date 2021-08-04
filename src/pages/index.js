import React from "react";
import "../styles/main.css";
import InfoCard from "../components/InfoCard/InfoCard";
import About from "../components/About/About";
import WorkExperience from "../components/WorkExperience/WorkExperience";
import Education from "../components/Education/Education";
import Skills from "../components/Skills/Skills";
import "typeface-source-sans-pro";
import { Helmet } from "react-helmet";

const IndexPage = () => (
  <>
    <Helmet>
      <html lang="en" className="dark" />
      <title>Barnabás Molnár</title>
      <meta
        name="description"
        content="The resume of Barnabás Molnár, full-stack JavaScript developer"
      />
    </Helmet>
    <div className="border-t-8 border-indigo-800 dark:border-rose-400">
      <div className="max-w-screen-xl px-4 pt-16 mx-auto xl:px-16">
        <div className="lg:-mx-4 xl:-mx-8 lg:flex">
          <div className="self-start mb-20 lg:sticky top-4 lg:w-1/4 lg:px-4 xl:px-8 lg:mb-0">
            <InfoCard />
          </div>
          <div className="lg:w-3/4 lg:px-4 xl:px-8">
            <article className="mb-20">
              <About />
            </article>
            <article className="mb-20">
              <WorkExperience />
            </article>
            <article className="mb-20">
              <Skills />
            </article>
            <Education />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default IndexPage;
