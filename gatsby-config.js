/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Jane Moroz · Portfolio",
    description:
      "Jane Moroz is a web developer, who is passionate about technology, learning new things and creating truly beautiful, efficient and accessible digital products.",
    author: {
      name: "Jane Moroz",
      minibio:
        "<strong>Jane Moroz</strong> is a web developer, who is passionate about technology, learning new things and creating truly beautiful, efficient and accessible digital products. She's also interested in web design , and an advocate of building not only efficient but user-friendly and appealing websites and mobile apps.",
    },
    canonicalUrl: "https://jane-moroz-dev.netlify.app",
    image: "/og.png",
    social: {
      twitter: "@jane_moroz",
    },
  },
  plugins: [
    `gatsby-plugin-smoothscroll`,
    { resolve: `gatsby-plugin-styled-components` },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variants: ["300", "400", "500"],
            },
            {
              family: "Fascinate",
              variants: ["400"],
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `8ob81zn6fpmb`,
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
