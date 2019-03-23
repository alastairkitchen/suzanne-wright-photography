import React from "react";
import SiteLayout from "../components/layout/siteLayout";
import Img from "gatsby-image";
import ImageGallery from "../components/imageGallery/imageGallery";

const Family = ({ data }) => {
  return (
    <SiteLayout>
      {/* <Img
        fluid={data.images.childImageSharp.fluid}
        alt="Gatsby Docs are awesome"
      /> */}
      <ImageGallery {...data} />
    </SiteLayout>
  );
};

export default Family;

export const query = graphql`
  query {
    images: allFile(
      filter: { extension: { regex: "/(jpg)|(png)|(gif)|(jpeg)/" } }
    ) {
      edges {
        node {
          id
          childImageSharp {
            # Specify the image processing specifications right in the query.
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    familyImages: allMarkdownRemark(
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
