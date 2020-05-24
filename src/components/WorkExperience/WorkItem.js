import React from "react";
import {
  CompanyIcon,
  MapMarkerIcon,
  CalendarIcon,
} from "../../images/SvgIcons";
import classnames from "classnames";

const WorkItem = ({
  title,
  isFullTime,
  company,
  place,
  duration,
  description,
}) => (
  <li className="pb-8 mb-8 border-b">
    <div className="items-center justify-between mb-4 sm:flex">
      <h3 className="font-bold tracking-wider uppercase">{title}</h3>
      <dl>
        <dt className="sr-only">Position type</dt>
        <dd
          className={classnames(
            "sm:text-sm sm:px-3 sm:py-1 sm:font-semibold rounded inline-block mb-3 sm:mb-0",
            {
              "sm:text-green-800 sm:bg-green-200": isFullTime,
              "sm:text-gray-800 sm:bg-gray-200": !isFullTime,
            }
          )}
        >
          {isFullTime ? "Full time" : "Part time"}
        </dd>
      </dl>
    </div>
    <dl className="grid-cols-3 row-gap-4 sm:grid">
      <div>
        <div className="inline-flex items-center">
          <dt className="sr-only">Company name</dt>
          <CompanyIcon className="w-4 h-4 mr-1" />
          <dd>{company}</dd>
        </div>
      </div>
      <div>
        <div className="inline-flex items-center">
          <dt className="sr-only">Place of work</dt>
          <MapMarkerIcon className="w-4 h-4 mr-1" />
          <dd>{place}</dd>
        </div>
      </div>
      <div className="sm:text-right">
        <div className="inline-flex items-center">
          <dt className="sr-only">Employment duration</dt>
          <CalendarIcon className="w-4 h-4 mr-1" />
          <dd>{duration}</dd>
        </div>
      </div>
      {description ? (
        <div className="col-span-3 mt-3 sm:mt-0">
          <dt className="sr-only">Roles and responsibilites</dt>
          <dd dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      ) : null}
    </dl>
  </li>
);

export default WorkItem;
