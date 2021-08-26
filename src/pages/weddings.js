import React from "react";
import { graphql } from 'gatsby';
import SiteLayout from "../components/layout/siteLayout";
import ImageGallery from "../components/imageGallery/imageGallery";
// utils
import { extractFrontMatterData } from "../utils/graphqlUtil.js";

const Family = ({ data }) => {

  let content = extractFrontMatterData(data.pageData);

  return (

    <SiteLayout
      title={content.title}
      contentOuter={<ImageGallery imageGallery={content.imageGallery} />}
    >

    </SiteLayout>
  );
};

export default Family;

export const query = graphql`
  query {
    pageData: allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { eq: "image-gallery" }
          title: { eq: "Weddings" }
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
            imageGallery {
              image
              title
            }
            url
            coverImage
          }
        }
      }
    }
  }
`;
