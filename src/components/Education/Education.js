import React from "react";
import EducationItem from "./EducationItem";
import { useStaticQuery, graphql } from "gatsby";

const Education = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    query SchoolsQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/education/" } }
        sort: { fields: frontmatter___sortOrder }
      ) {
        edges {
          node {
            id
            frontmatter {
              name
              type
              university
              duration
            }
            html
          }
        }
      }
    }
  `);

  const schools = edges.map(({ node }) => ({
    id: node.id,
    name: node.frontmatter.name,
    type: node.frontmatter.type,
    university: node.frontmatter.university,
    duration: node.frontmatter.duration,
    description: node.html,
  }));

  return (
    <>
      <div className="relative inline-block">
        <h2 className="relative z-10 mb-2 text-3xl font-bold text-indigo-700">
          Education
        </h2>
        <div className="absolute z-0 w-full h-3 bg-purple-200 opacity-50 bottom-3"></div>
      </div>
      <ul>
        {schools.map(
          ({ id, name, type, university, duration, description }) => (
            <EducationItem
              key={id}
              name={name}
              type={type}
              university={university}
              duration={duration}
              description={description}
            />
          )
        )}
      </ul>
    </>
  );
};

export default Education;
