import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { BsClockHistory, BsClock, BsPeople } from 'react-icons/bs'
import Layout from "../../components/Layout";
import { Link } from "gatsby";
import slugify from 'slugify'
import SEO from "../../components/SEO";

const RecipeTemplate = ({data}) => {
  const {
    title, 
    cookTIme, 
    content, 
    prepTime, 
    servings,
    description: { description },
    image
  } = data.contentfulRecipe;
  const pathToImage = getImage(image);

  const {tags, instructions, ingredients, tools} = content;

  return (
    <Layout>
      <SEO title={`Recipes | ${title}`} />

      <main className="page">
        <div className="recipe-page">
          <section className="recipe-hero">
            <GatsbyImage
              image={pathToImage}
              alt={title}
              className="about-img"
            />

            <article className="recipe-info">
              <h2>{title}</h2>
              <p>{description}</p>

              <div className="recipe-icons">
                <article>
                  <BsClock />
                  <h5>Prep Time</h5>
                  <p>{prepTime} min.</p>
                </article>

                <article>
                  <BsClockHistory />
                  <h5>Cook Time</h5>
                  <p>{cookTIme} min.</p>
                </article>

                <article>
                  <BsPeople />
                  <h5>Servings</h5>
                  <p>{servings}</p>
                </article>
              </div>

              <p className="recipe-tags">
                Tags: {tags.map((tag, index) => {
                  return <Link to={`/tags/${slugify(tag, {lower: true})}`} key={index}>{tag}</Link>
                })}
              </p>
            </article>
          </section>

          <section className="recipe-content">
            <article>
              <h4>Instructions</h4>

              {instructions.map((item, index) => {
                return (
                  <div key={index} className="single-instruction">
                    <header>
                      <p>Step: {index + 1}</p>
                      <div></div>
                    </header>
                    <p>{item}</p>
                  </div>
                )
              })}
            </article>

            <article className="second-column">
              {ingredients.length > 0 && 
                <div>
                  <h4>Ingredients</h4>

                  {ingredients.map((item, index) => {
                    return (
                      <p key={index} className="single-ingredient">{item}</p>
                    )
                  })}
                </div>
              }

              {tools.length > 0 && 
                <div>
                  <h4>Tools</h4>

                  {tools.map((item, index) => {
                    return (
                      <p key={index} className="single-tool">{item}</p>
                    )
                  })}
                </div>
              }
            </article>
          </section>
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipe(title: {eq: $title}) {
      title
      cookTIme
      content {
        ingredients
        instructions
        tags
        tools
      }
      description {
        description
      }
      prepTime
      servings
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`

export default RecipeTemplate