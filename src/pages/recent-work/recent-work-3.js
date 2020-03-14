import React from "react";
import SiteLayout from "../../components/layout/siteLayout";
import ImageGallery from "../../components/imageGallery/imageGallery";
// utils
import { extractFrontMatterData } from "../../utils/graphqlUtil.js";

const Family = ({ data }) => {

  let imageGallery = extractFrontMatterData(data.pageData).imageGallery;

  return (

    <SiteLayout
      contentOuter={<ImageGallery imageGallery={imageGallery} />}
    >
      <div className="site-container">
        <div className="site-row">
          <p className="site-main__description">{extractFrontMatterData(data.pageData).description}</p>
        </div>
      </div>
    </SiteLayout>
  );
};

export default Family;

export const query = graphql`
  query {
    pageData: allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { eq: "recent-work-image-gallery" }
          url: { eq: "recent-work/recent-work-3" }
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
