import React from "react";
import SiteLayout from "../components/layout/siteLayout";
import ImageGallery from "../components/imageGallery/imageGallery";
// Helpers
// import { filterImagesByGallery } from "../helpers/imageGalleryHelper";

const Family = ({ data }) => {
  // // filter image data by gallery
  // let galleryImages = filterImagesByGallery(
  //   data.galleryImages,
  //   data.allImages
  // );

  return (
    // <SiteLayout contentOuter={<ImageGallery images={galleryImages} />}>
    // </SiteLayout>
    <SiteLayout contentOuter={
      <p>testing</p>
    }>
    </SiteLayout>
  );
};

export default Family;

// export const query = graphql`
//   query {
//     allImages: allFile(
//       filter: { extension: { regex: "/(jpg)|(png)|(gif)|(jpeg)/" } }
//     ) {
//       edges {
//         node {
//           id
//           name
//           childImageSharp {
//             fixed(width: 1200, height: 800) {
//               ...GatsbyImageSharpFixed
//             }
//             fluid(maxWidth: 600, maxHeight: 600) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//     galleryImages: allMarkdownRemark(
//       filter: {
//         frontmatter: {
//           templateKey: { eq: "image-gallery" }
//           title: { eq: "Family" }
//         }
//       }
//     ) {
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             templateKey
//             date
//             description
//             galleryImages
//             url
//             coverImage
//           }
//         }
//       }
//     }
//   }
// `;
