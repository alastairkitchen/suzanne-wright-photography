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
      const regexGetFilename = /(?<=\/)[^\/]+$/gm;
      let str = image;
      let matches;

      while ((matches = regexGetFilename.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (matches.index === regexGetFilename.lastIndex) {
          regexGetFilename.lastIndex++;
        }

        matches.forEach(match => {
          galleryImagesWithExtension.push(match);
        });
      }
    });

    /*
     * loop through gallery images with extension and strip out extension
     */
    galleryImagesWithExtension.forEach(image => {
      image = image
        .replace(".jpg", "")
        .replace(".jpeg", "")
        .replace(".gif", "")
        .replace(".png", "")
        .replace(".JPG", "")
        .replace(".JPEG", "")
        .replace(".GIF", "")
        .replace(".PNG", "");
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
