import React from "react";
import {
  MapMarkerIcon,
  ComputerIcon,
  LinkedInIcon,
  GithubIcon,
} from "../../images/SvgIcons";
import profilePic from "../../images/barna_molnar.jpg";

const InfoCard = () => (
  <>
    <div className="mb-12 text-center">
      <div className="w-40 h-40 mx-auto mb-4 overflow-hidden rounded-full shadow-xl">
        <img src={profilePic} alt="Barnabás Molnár" />
      </div>
      <h1 className="text-4xl font-bold leading-10">Barnabás Molnár</h1>
      <p className="text-2xl text-gray-700">Full-stack developer</p>
    </div>
    <dl>
      <div>
        <dt className="sr-only">Residence, place of work</dt>
        <div className="flex items-center pb-2 mb-2 border-b">
          <MapMarkerIcon className="w-4 h-4 mr-3" />
          <dd className="mr-2">Sopron, HU</dd>
        </div>
        <div className="flex items-center pb-2 mb-2 border-b">
          <ComputerIcon className="w-4 h-4 mr-3" />
          <dd>Works remote</dd>
        </div>
      </div>
      <div>
        <dt className="sr-only">LinkedIn profile</dt>
        <div className="flex items-center pb-2 mb-2 border-b">
          <LinkedInIcon className="w-4 h-4 mr-3" />
          <dd>
            <a
              href="https://www.linkedin.com/in/barnab%C3%A1s-moln%C3%A1r-773232191/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Barnabás Molnár
            </a>
          </dd>
        </div>
      </div>
      <div>
        <dt className="sr-only">Github profile</dt>
        <div className="flex items-center pb-2 mb-2 border-b">
          <GithubIcon className="w-4 h-4 mr-3" />
          <dd>
            <a
              href="https://github.com/barnabasmolnar"
              rel="noopener noreferrer"
              target="_blank"
            >
              barnabasmolnar
            </a>
          </dd>
        </div>
      </div>
    </dl>
  </>
);

export default InfoCard;
