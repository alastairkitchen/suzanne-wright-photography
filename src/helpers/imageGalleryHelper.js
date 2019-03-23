export const filterImagesByGallery = (galleryData, allFileData) => {
  // console.dir(galleryData);
  // console.dir(allFileData);

  let galleryImagesWithExtension = [];
  let galleryImagesByName = [];
  galleryData.edges[0].node.frontmatter.galleryImages.forEach(image => {
    const regexGetFilename = /(?<=\/)[^\/]+$/gm;
    let str = image;
    let m;

    while ((m = regexGetFilename.exec(str)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regexGetFilename.lastIndex) {
        regexGetFilename.lastIndex++;
      }

      // The result can be accessed through the `m`-variable.
      m.forEach(match => {
        galleryImagesWithExtension.push(match);
      });
    }
  });

  galleryImagesWithExtension.forEach(image => {
    const regexRemoveExtension = /(^\w+(?=\.))/gm;
    let m;

    while ((m = regexRemoveExtension.exec(image)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regexRemoveExtension.lastIndex) {
        regexRemoveExtension.lastIndex++;
      }

      // The result can be accessed through the `m`-variable.
      m.forEach(match => {
        galleryImagesByName.push(match);
      });
    }
  });

  console.dir(galleryImagesByName);

  let filteredImages = allFileData.edges.filter(edge => {
    let names = ["chemex", "chris-haslam"];
    return names.includes(edge.node.name);
  });

  //console.dir(filteredImages);
};
