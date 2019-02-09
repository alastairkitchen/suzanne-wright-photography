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
  console.dir(data);
  return (
    <SiteLayout>
      {images(
        data.allFile !== null
          ? data.allFile.edges[2].node.childMarkdownRemark.frontmatter
              .galleryImages
          : false
      )}

      <div>Homepage</div>
      <img src="https://via.placeholder.com/468x200" />
      <img src="https://via.placeholder.com/468x200" />
      <img src="https://via.placeholder.com/468x200" />
      <div>Hello world</div>
    </SiteLayout>
  );
};

//dir: {
//   regex: "/Applications/MAMP/htdocs/www.suzannewrightphotographer.internal/src/imageGalleries/"
// }

export const query = graphql`
  query {
    allFile(filter: {}) {
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
