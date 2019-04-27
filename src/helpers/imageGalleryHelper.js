import { stripDirectoryFromFile, removeFileExtension } from "../utils/fileUtil";

export const filterImagesByGallery = (galleryData, allFileData) => {
  let galleryImagesWithExtension = [];
  let galleryImagesByName = [];

  if (galleryData.hasOwnProperty("edges")) {
    /*
     * loop through gallery image paths and strip out directory data
     * add results to gallery images with extension array
     * e.g. ["image1.jpg","image2.jpg"]
     */
    galleryData.edges[0].node.frontmatter.galleryImages.forEach(image => {
      galleryImagesWithExtension.push(stripDirectoryFromFile(image));
    });

    /*
     * loop through gallery images with extension and strip out extension
     */
    galleryImagesWithExtension.forEach(image => {
      image = removeFileExtension(image);
      galleryImagesByName.push(image);
    });

    if (galleryImagesByName.length > 0) {
      let filteredImages = allFileData.edges.filter(edge => {
        return galleryImagesByName.includes(edge.node.name);
      });

      return filteredImages;
    }
  }

  // default return false
  return false;
};

/*
 * returns the image sharp object based on the image name that is passed in as second argument
 * e.g. image name beach-image will return the image sharp object for beach-image
 */
export const getImageFromAllImageSharp = (allImageSharpImages, imageName) => {
  let imageNameNoExtension = removeFileExtension(
    stripDirectoryFromFile(imageName)
  );
  let pickedImageSharp = allImageSharpImages.edges.filter(edge => {
    return (
      removeFileExtension(stripDirectoryFromFile(edge.node.resize.src)) ===
      imageNameNoExtension
    );
  });
  return pickedImageSharp;
};
