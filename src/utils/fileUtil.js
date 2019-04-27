/*
 * strip out directory from filename - /test/test2/my-directory/myImage.jpg will return myImage.jpg
 */
export const stripDirectoryFromFile = filePath => {
  const regexGetFilename = /(?<=\/)[^\/]+$/gm;
  let str = filePath;
  let matches;
  let transformedFilePath = "";

  while ((matches = regexGetFilename.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (matches.index === regexGetFilename.lastIndex) {
      regexGetFilename.lastIndex++;
    }

    matches.forEach(match => {
      transformedFilePath = match;
    });
  }

  return transformedFilePath;
};

/*
 * Remove file extension from file path
 */
export const removeFileExtension = filePath => {
  return filePath
    .replace(".jpg", "")
    .replace(".jpeg", "")
    .replace(".gif", "")
    .replace(".png", "")
    .replace(".JPG", "")
    .replace(".JPEG", "")
    .replace(".GIF", "")
    .replace(".PNG", "");
};
