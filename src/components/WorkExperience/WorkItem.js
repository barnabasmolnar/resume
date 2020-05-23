import React from "react";

const WorkItem = ({
  title,
  isFullTime,
  company,
  place,
  duration,
  description,
}) => (
  <li>
    <div>
      <h3>{title}</h3>
      <dl>
        <dt className="sr-only">Position type</dt>
        <dd>{isFullTime ? "Full time" : "Part time"}</dd>
      </dl>
    </div>
    <dl>
      <div>
        <dt className="sr-only">Company name</dt>
        <dd>{company}</dd>
      </div>
      <div>
        <dt className="sr-only">Place of work</dt>
        <dd>{place}</dd>
      </div>
      <div>
        <dt className="sr-only">Employment duration</dt>
        <dd>{duration}</dd>
      </div>
      {description ? (
        <div>
          <dt className="sr-only">Roles and responsibilites</dt>
          <dd dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      ) : null}
    </dl>
  </li>
);

export default WorkItem;
