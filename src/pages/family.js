import React from "react";
import SiteLayout from "../components/layout/siteLayout";
import ImageGallery from "../components/imageGallery/imageGallery";

const Family = ({ data }) => {
  return (
    <SiteLayout>
      <ImageGallery {...data} />
    </SiteLayout>
  );
};

export default Family;

export const query = graphql`
  query {
    allImages: allFile(
      filter: { extension: { regex: "/(jpg)|(png)|(gif)|(jpeg)/" } }
    ) {
      edges {
        node {
          id
          name
          childImageSharp {
            # Specify the image processing specifications right in the query.
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    galleryImages: allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { eq: "image-gallery" }
          title: { eq: "Family" }
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
