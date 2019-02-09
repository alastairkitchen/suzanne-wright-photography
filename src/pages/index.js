import React from "react";
import { graphql } from "gatsby";
import SiteLayout from "../components/layout/siteLayout";

const images = images => {
  if (images) {
    return images.map((image, i) => {
      return <img key={i} src={image} />;
    });
  }
};

export default ({ data }) => {
  return (
    <SiteLayout>
      {images(
        data.allFile.edges[0].node.childMarkdownRemark.frontmatter.galleryImages
      )}

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
    allFile(
      filter: {
        dir: {
          regex: "/Applications/MAMP/htdocs/www.suzannewrightphotographer.internal/src/imageGalleries/"
        }
      }
    ) {
      edges {
        node {
          name
          dir
          childMarkdownRemark {
            id
            html
            frontmatter {
              title
              templateKey
              galleryImages
            }
          }
        }
      }
    }
  }
`;
