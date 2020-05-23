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
      <h2>Education</h2>
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
