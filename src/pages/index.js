import React from "react";
import { graphql } from "gatsby";
import SiteLayout from "../components/layout/siteLayout";
import PageListItem from "../components/pageListItem";

const pageListItems = data => {
  if (data && data.allMarkdownRemark) {
    if (data.allMarkdownRemark.edges.length > 0) {
      let pageData = data.allMarkdownRemark.edges;
      let items = pageData.map((page, i) => {
        return (
          <PageListItem
            key={i}
            title={page.node.frontmatter.title}
            coverImage={page.node.frontmatter.coverImage}
          />
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
      {pageListItems(data)}

      <img src="https://via.placeholder.com/468x200" />
      <img src="https://via.placeholder.com/468x200" />
      <img src="https://via.placeholder.com/468x200" />
      <div>Hello world</div>
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
            _PARENT
          }
        }
      }
    }
  }
`;
