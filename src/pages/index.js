import React from "react";
import { graphql } from "gatsby";
import SiteLayout from "../components/layout/siteLayout";

const pageListItem = page => {
  if (page) {
    return test;
  }
};

export default ({ data }) => {
  console.dir(data);
  return (
    <SiteLayout>
      <div>Homepage</div>
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
