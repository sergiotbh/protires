module.exports = {
  siteMetadata: {
      title: ``,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/protires_favicon.png"
      }
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    'gatsby-plugin-postcss',
  ]
};