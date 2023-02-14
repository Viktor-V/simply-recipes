import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import slugify from 'slugify'

const RecipesList = ({ recipes = [] }) => {
  return (
    <div className="recipes-list">
      {
        recipes.map((recipe) => {
          const {
            id,
            title,
            image,
            prepTime,
            cookTIme
          } = recipe;

          return (
            <Link key={id} to={`/recipes/${slugify(title, {lower: true})}`} className="recipe">
              <GatsbyImage image={getImage(image)} className="recipe-img" alt="title"/>
              <h5>{title}</h5>
              <p>Prep:  {prepTime}min | Cook: {cookTIme}min</p>
            </Link>
          )
      })}
    </div>
  )
}

export default RecipesList