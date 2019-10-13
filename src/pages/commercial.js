import React from "react";
import SiteLayout from "../components/layout/siteLayout";
import ImageGallery from "../components/imageGallery/imageGallery";
// utils
import { extractFrontMatterData } from "../utils/graphqlUtil.js";

const Family = ({ data }) => {

  let galleryImages = extractFrontMatterData(data.pageData).galleryImages;

  return (

    <SiteLayout
      contentOuter={<ImageGallery images={galleryImages} />}
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
          title: { eq: "Commercial" }
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
          }
        }
      }
    }
  }
`;
