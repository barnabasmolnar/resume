module.exports = {
  siteMetadata: {
    title: `Barnabás Molnár`,
    description: `Personal website of Barnabás Molnár, software engineer.`,
    author: `barnabasmolnar`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `barnabas-molnar-resume`,
        short_name: `B. Molnar resume`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#434190`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown-content/`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};
