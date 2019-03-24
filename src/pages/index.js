import React from "react";
import { graphql } from "gatsby";
import SiteLayout from "../components/layout/siteLayout";
import PageListItem from "../components/pageListItem/pageListItem";

const pageListItems = data => {
  if (data && data.allMarkdownRemark) {
    if (data.allMarkdownRemark.edges.length > 0) {
      let pageData = data.allMarkdownRemark.edges;
      let items = pageData.map((page, i) => {
        return <PageListItem key={i} {...page.node.frontmatter} />;
      });
      return items;
    }
  }
};

export default ({ data }) => {
  console.dir(data);
  return (
    <SiteLayout>
      <ul className="page-list-items">{pageListItems(data)}</ul>
      Now then now thennnnnn..
    </SiteLayout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "image-gallery" } } }
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
