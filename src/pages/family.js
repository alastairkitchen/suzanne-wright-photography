import React from "react";
import SiteLayout from "../components/layout/siteLayout";
import Img from "gatsby-image";

const renderImages = data => {
  if (data && data.allMarkdownRemark) {
    if (data.allMarkdownRemark.edges.length > 0) {
      let imagesData =
        data.allMarkdownRemark.edges[0].node.frontmatter.galleryImages;
      let items = imagesData.map((image, i) => {
        console.dir(image);
        return (
          <img src={image} style={{ maxWidth: "350px", maxHeight: "350px" }} />
        );
      });
      return items;
    }
  }
};

const Family = ({ data }) => {
  return (
    <SiteLayout>
      {renderImages(data)}

      {/* <Img
      fluid={}
      alt="Gatsby Docs are awesome"
    /> */}
    </SiteLayout>
  );
};

export default Family;

export const query = graphql`
  query {
    allMarkdownRemark(
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
  }
`;
