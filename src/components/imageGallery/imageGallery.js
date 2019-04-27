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
      let imageElements = galleryImages.map((image, i) => {
        return (
          <div className="image-grid__column" key={"image-gallery-" + i}>
            <Img
              className="image-grid__column-inner"
              key={image.node.id}
              fluid={image.node.childImageSharp.fluid}
              alt="Gatsby Docs are awesome"
            />
          </div>
        );
      });

      return (
        <div className="image-grid image-grid--3-col">{imageElements}</div>
      );
    } else {
      return <p>No images found...</p>;
    }
  }

  // no props? return null
  return null;
};

export default imageGallery;
