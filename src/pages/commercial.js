import React from "react";
import SiteLayout from "../components/layout/siteLayout";
import ImageGallery from "../components/imageGallery/imageGallery";

const Commercial = ({ data }) => {
  console.dir(data);
  return (
    <SiteLayout>
      <ImageGallery {...data} />
    </SiteLayout>
  );
};

export default Commercial;

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
            fluid(maxWidth: 600, maxHeight: 600) {
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
