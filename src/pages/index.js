import React from "react";
import { graphql } from "gatsby";
import SiteLayout from "../components/layout/siteLayout";
import PageListItem from "../components/pageListItem/pageListItem";
import { getImageFromAllImageSharp } from "../helpers/imageGalleryHelper";

const pageListItems = data => {
  if (data && data.pages) {
    if (data.pages.edges.length > 0) {
      let pageData = data.pages.edges;
      let items = pageData.map((page, i) => {
        let bgImage = getImageFromAllImageSharp(
          data.images,
          page.node.frontmatter.coverImage
        );

        return (
          <PageListItem
            key={i}
            {...page.node.frontmatter}
            index={i + 1}
            bgImage={bgImage[0].node.resize.src}
          />
        );
      });
      return items;
    }
  }
};

export default ({ data }) => {
  console.dir(data);
  return (
    <SiteLayout>
      <div className="page-list">{pageListItems(data)}</div>
      Now then now thennnnnn..
    </SiteLayout>
  );
};

// Up to here! add all images to query and transform data

export const query = graphql`
  query {
    pages: allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { regex: "/(image-gallery)|(generic-page)/" }
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
    images: allImageSharp {
      edges {
        node {
          ... on ImageSharp {
            resize(width: 1600, height: 800) {
              src
            }
          }
          original {
            width
            height
            src
          }
        }
      }
    }
  }
`;
