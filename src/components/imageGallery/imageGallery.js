import React from "react";
import Img from "gatsby-image";

const imageGallery = data => {
  if (data) {
    let imageElements = data.images.edges.map(image => {
      console.dir(image);
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

  // no data? return null
  return null;
};

export default imageGallery;
