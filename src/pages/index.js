import React from "react";
import { graphql } from "gatsby";
import SiteLayout from "../components/layout/siteLayout";
import PageListItem from "../components/pageListItem/pageListItem";

const pageListItems = data => {
  if (data && data.allMarkdownRemark) {
    if (data.allMarkdownRemark.edges.length > 0) {
      let pageData = data.allMarkdownRemark.edges;
      let items = pageData.map((page, i) => {
        return (
          <PageListItem key={i} {...page.node.frontmatter} index={i + 1} />
        );
      });
      return items;
    }
  }
};

export default ({ data }) => {
  console.dir(data);
  return (
    <SiteLayout>
      <div className="page-list">{pageListItems(data)}</div>
      Now then now thennnnnn..
    </SiteLayout>
  );
};

// Up to here! add all images to query and transform data

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { regex: "/(image-gallery)|(generic-page)/" }
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
            galleryImages
            url
            coverImage
            _PARENT
          }
        }
      }
    }
  }
`;
