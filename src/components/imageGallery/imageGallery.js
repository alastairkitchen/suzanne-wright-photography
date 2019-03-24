import React from "react";
import Img from "gatsby-image";
// Helpers
import { filterImagesByGallery } from "../../helpers/imageGalleryHelper";

const imageGallery = props => {
  // filter image data by gallery
  let galleryImages = filterImagesByGallery(
    props.galleryImages,
    props.allImages
  );

  if (galleryImages) {
    if (galleryImages.length > 0) {
      let imageElements = galleryImages.map(image => {
        return (
          <Img
            key={image.node.id}
            fluid={image.node.childImageSharp.fluid}
            alt="Gatsby Docs are awesome"
          />
        );
      });
      return imageElements;
    } else {
      return <p>No images found...</p>;
    }
  }

  // no props? return null
  return null;
};

export default imageGallery;
