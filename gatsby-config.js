module.exports = {
  siteMetadata: {
    title: `APCS 2021 Final Projects`,
    description: `Take a look at all the final project submissions from the 2021 rigde APCS class.`,
    author: `@cyfinfaza`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-image`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    // `gatsby-transformer-sharp`,
    // `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `APCS 2021 Final Projects`,
        short_name: `APCS 2021`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#222222`,
        display: `minimal-ui`,
        icon: `src/images/icons8-code-96.png`, // This path is relative to the root of the site.
      },
    },
    // `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
