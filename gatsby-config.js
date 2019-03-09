module.exports = {
  siteMetadata: {
    title: "Suzanne Wright Photographer"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/imageGalleries`
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: []
      }
    },
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-netlify" // make sure to keep it last in the array
  ]
};
