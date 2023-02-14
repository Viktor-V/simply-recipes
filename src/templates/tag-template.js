import React from 'react'
import { graphql } from 'gatsby'
import RecipesList from '../components/RecipesList'
import Layout from '../components/Layout'
import SEO from "../components/SEO";

const TagTemplate = ({data, pageContext}) => {
  return (
    <Layout>
      <SEO title={`Tags | ${pageContext.tag}`} />

      <main className="page">
        <h2>{pageContext.tag}</h2>

        <div className="tag-recipes">
          <RecipesList recipes={data.allContentfulRecipe.nodes} />
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query ($tag: String) {
    allContentfulRecipe(sort: {title: ASC}, filter: {content: {tags: {eq: $tag}}}) {
      nodes {
        title
        id
        cookTIme
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

export default TagTemplate;