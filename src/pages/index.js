import React from "react";
import { graphql } from "gatsby";
import SiteLayout from "../components/layout/siteLayout";
import PageList from "../components/pageList/pageList";

export default ({ data }) => {

  if (data && data.pages) {
    if (data.pages.edges.length > 0) {
      let pages = [];

      data.pages.edges.forEach(edge => {
        if (edge.node.frontmatter.displayOnHomepage) {
          pages.push(edge.node.frontmatter);
        }
      })

      return (
        <SiteLayout>
          <PageList pages={pages} listView="HOME" />
        </SiteLayout>
      )
    }
  }

  return (
    <p>error getting pages</p>
  )
};

//hideHome: {ne: true}

export const query = graphql`
  query {
    pages: allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { regex: "/(recent-work-page)|(recent-work-image-gallery)|(^image-gallery$)|(about-page)|(contact-page)/" }
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
            displayOnHomepage
          }
        }
      }
    }
  }
`;
