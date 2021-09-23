import React from "react";
import { graphql } from "gatsby";
import SiteLayout from "../components/layout/siteLayout";
import PageList from "../components/pageList/pageList";
import { extractFrontMatterData } from '../utils/graphqlUtil';

export default ({ data }) => {

  if (data && data.pages) {
    if (data.pages.edges.length > 0) {
      let pages = [];


      data.pages.edges.forEach(edge => {
        if (edge.node.frontmatter.active) {
          pages.push(edge.node.frontmatter);
        }
      })

      const content = extractFrontMatterData(data.recentWorkPage);

      console.dir(content);

      return (
        <SiteLayout
          title={content.title}
        >
          <div>
            {content.description ? (<p className="site-main__description">{content.description}</p>) : ''}
            <PageList pages={pages} />
          </div>
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
            active
          }
        }
      }
    }
    recentWorkPage: allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { regex: "/(recent-work-page)/" }
        }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            templateKey
            description
          }
        }
      }
    }
  }
`;
