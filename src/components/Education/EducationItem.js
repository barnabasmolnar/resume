import React from "react";
import { CalendarIcon, SchoolIcon } from "../../images/SvgIcons";

const EducationItem = ({ name, type, university, duration, description }) => {
  return (
    <li className="pb-8 mb-8 border-b">
      <div className="items-center justify-between mb-4 sm:flex">
        <h3 className="font-bold tracking-wider uppercase">{name}</h3>
        <dl className="inline-block mb-3 rounded sm:px-3 sm:py-1 sm:font-semibold sm:mb-0 sm:text-gray-800 sm:bg-gray-200 sm:text-sm">
          <dt className="sr-only">Degree type</dt>
          <dd>{type}</dd>
        </dl>
      </div>
      <dl className="grid-cols-2 gap-y-4 text-gray-700 sm:grid">
        <div className="inline-flex items-center">
          <dt className="sr-only">University</dt>
          <SchoolIcon className="w-4 h-4 mr-1" />
          <dd>{university}</dd>
        </div>
        <div className="sm:text-right">
          <div className="inline-flex items-center">
            <dt className="sr-only">Duration of studies</dt>
            <CalendarIcon className="w-4 h-4 mr-1" />
            <dd>{duration}</dd>
          </div>
        </div>
        {description ? (
          <div className="col-span-3 mt-3 sm:mt-0">
            <dt className="sr-only">Description</dt>
            <dd>
              Not finished due to a rather stark career change. I have, however,
              completed 40 credits towards an MA in English Language and
              Linguistics. Very much enjoyed the course and may get back to it
              sometime.
            </dd>
          </div>
        ) : null}
      </dl>
    </li>
  );
};

export default EducationItem;
