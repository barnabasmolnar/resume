import React from "react";

const EducationItem = ({ name, type, university, duration, description }) => {
  return (
    <li>
      <h3>{name}</h3>
      <dl>
        <div>
          <dt className="sr-only">Degree type</dt>
          <dd>{type}</dd>
        </div>
        <div>
          <dt className="sr-only">University</dt>
          <dd>{university}</dd>
        </div>
        <div>
          <dt className="sr-only">Duration of studies</dt>
          <dd>{duration}</dd>
        </div>
        {description ? (
          <div>
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
