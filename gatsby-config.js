/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Alex's Website`,
    menuLinks:[
        {
          name:'home',
          link:'/'
        },
      ],
    siteUrl: `localhost:8000`,
    description: `My own personal website, all about me!`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options:
        {
          path: `${__dirname}/src/images`,
          name: 'images'
        }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options:
        {
          path: `${__dirname}/src/markdown-pages`,
          name: 'markdown-pages'
        }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        "fonts": [
          {
            "family": "Roboto",
            "variants": [
              "400",
              "400i",
              "700",
              "700i"
            ],
            "subsets": [
              "latin-ext"
            ]
          }
        ],
        "formats": [
          "woff",
          "woff2"
        ],
      },
    },
    'gatsby-transformer-sharp',
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sharp',
  ]
}
