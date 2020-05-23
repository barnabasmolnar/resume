import React from "react";
import WorkItem from "./WorkItem";
import { useStaticQuery, graphql } from "gatsby";

const WorkExperience = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    query JobsQuery {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/jobs/" } }) {
        edges {
          node {
            id
            frontmatter {
              company
              title
              duration
              isFullTime
              place
            }
            html
          }
        }
      }
    }
  `);

  const jobs = edges.map(({ node }) => ({
    id: node.id,
    title: node.frontmatter.title,
    isFullTime: node.frontmatter.isFullTime,
    company: node.frontmatter.company,
    place: node.frontmatter.place,
    duration: node.frontmatter.duration,
    description: node.html,
  }));

  return (
    <>
      <h2>Work experience</h2>
      <ul>
        {jobs.map(
          ({
            id,
            title,
            isFullTime,
            company,
            place,
            duration,
            description,
          }) => (
            <WorkItem
              key={id}
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
};

export default WorkExperience;
