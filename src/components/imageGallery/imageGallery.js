import React from "react";
import Img from "gatsby-image";
// Helpers
import { filterImagesByGallery } from "../../helpers/imageGalleryHelper";

const imageGallery = props => {
  // filter all images by name = any of the image gallery names
  filterImagesByGallery(props.galleryImages, props.allImages);

  if (props.allImages) {
    let imageElements = props.allImages.edges.map(image => {
      //   console.dir(image);
      return (
        <Img
          key={image.node.id}
          fluid={image.node.childImageSharp.fluid}
          alt="Gatsby Docs are awesome"
        />
      );
    });
    return imageElements;
  }

  // no props? return null
  return null;
};

export default imageGallery;
