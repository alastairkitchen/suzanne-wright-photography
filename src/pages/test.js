import React from "react";
import SiteLayout from "../components/layout/siteLayout";
import Img from "gatsby-image";

const Test = ({ data }) => {
  console.dir(data);
  return (
    <SiteLayout>
      {/* <Img
      fluid={}
      alt="Gatsby Docs are awesome"
    /> */}
    </SiteLayout>
  );
};

export default Test;

export const query = graphql`
  query {
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
            _PARENT
          }
        }
      }
    }
    images: allFile(
      filter: { extension: { regex: "/(jpg)|(png)|(gif)|(jpeg)/" } }
    ) {
      edges {
        node {
          childImageSharp {
            id
            fixed {
              base64
              tracedSVG
              aspectRatio
              width
              height
              src
              srcSet
              srcWebp
              srcSetWebp
              originalName
            }
          }
        }
      }
    }
  }
`;
