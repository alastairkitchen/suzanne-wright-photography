import React from "react";
import { graphql } from "gatsby";
import SiteLayout from "../components/layout/siteLayout";
import PageList from "../components/pageList/pageList";

export default ({ data }) => {

  if (data && data.pages) {
    if (data.pages.edges.length > 0) {
      let pages = [];
      data.pages.edges.forEach(edge => {
        pages.push(edge.node.frontmatter);
      })

      return (
        <SiteLayout>
          <h1 className="content-h1">Recent work</h1>
          <PageList pages={pages} />
        </SiteLayout>
      )
    }
  }

  return (
    <p>error getting pages</p>
  )
};

export const query = graphql`
  query {
    pages: allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { regex: "/(recent-work-image-gallery)/" }
        }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            templateKey
            date
            description
            url
            coverImage
          }
        }
      }
    }
  }
`;
