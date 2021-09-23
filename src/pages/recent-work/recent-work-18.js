import React from "react";
import { graphql } from 'gatsby';
import SiteLayout from "../../components/layout/siteLayout";
import ImageGallery from "../../components/imageGallery/imageGallery";
// utils
import { extractFrontMatterData } from "../../utils/graphqlUtil.js";
import { URL } from '../../utils/urlConstants';

const Family = ({ data }) => {

  let content = extractFrontMatterData(data.pageData);

  return (

    <SiteLayout
      title={content.title}
      backLink={URL.RECENT_WORK}
    >
      <div>
        {content.description ? (<p className="site-main__description">{content.description}</p>) : ''}
        <ImageGallery imageGallery={content.imageGallery} />
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
          url: { eq: "/recent-work/recent-work-18" }
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
