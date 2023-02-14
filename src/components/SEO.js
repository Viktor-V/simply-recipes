import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({title, description}) => {
  return (
    <Helmet 
      htmlAttributes={{lang: "en"}}
      title={`Simple Recipes | ${title}`}
    >
    </Helmet>
  )
}

export default SEO