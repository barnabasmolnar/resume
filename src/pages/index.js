import React, { useState } from "react";
import "../styles/main.css";
import InfoCard from "../components/InfoCard/InfoCard";
import About from "../components/About/About";
import WorkExperience from "../components/WorkExperience/WorkExperience";
import Education from "../components/Education/Education";
import Skills from "../components/Skills/Skills";
import "typeface-source-sans-pro";
import { Helmet } from "react-helmet";
import classnames from "classnames";
import DarkModeToggle from "../components/DarkModeToggle";

const IndexPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <Helmet>
        <html lang="en" className={classnames({ dark: darkMode })} />
        <title>Barnabás Molnár</title>
        <meta
          name="description"
          content="The resume of Barnabás Molnár, full-stack JavaScript developer"
        />
      </Helmet>

      <div className="fixed right-2 top-4">
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>

      <div className="border-t-8 border-indigo-800 dark:border-rose-400">
        <div className="container px-4 pt-16 mx-auto xl:px-16 xl:max-w-screen-xl">
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
};

export default IndexPage;
