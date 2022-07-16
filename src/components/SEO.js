import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"

const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author {
          name
        }
        canonicalUrl
        image
        social {
          twitter
        }
      }
    }
  }
`

const Seo = ({ title }) => {
  const { site } = useStaticQuery(query)
  const image = `${site.siteMetadata.canonicalUrl}${site.siteMetadata.image}`
  const url = site.siteMetadata.canonicalUrl
  const titleFull = `${title} | ${site.siteMetadata.title}`
  const description = site.siteMetadata.description
  return (
    <Helmet htmlAttributes={{ lang: `en` }}>
      {/* General tags */}
      <title>{titleFull}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      <meta property="og:title" content={titleFull} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={site.siteMetadata.social.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}

export default Seo
